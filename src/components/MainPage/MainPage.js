import React, { createRef, useRef } from "react";
import { connect } from "react-redux";
import "./MainPage.css";
import ExerciseCalories from "../../components/ExerciseCalories/ExerciseCalories";
import FoodCalories from "../FoodCalories/FoodCalories";
import { v4 as uuidv4 } from 'uuid'

const MainPage = (props) => {

return (
    <div>
    <div>
        <h1>Main Page</h1>
    </div>

    <div className="main-container">
        {/* Exercise Component */}
        <ExerciseCalories
        exerciseState={props.exercise}
        addExercise={props.addExercise}
        calories={props.calories}
        editToggle={props.editToggle}
        editExercise={props.editExercise}
        />

        {/* Food Component */}
        <div style={{ borderLeft: "1px solid black" }}>
        <FoodCalories props={props} />
        </div>
    </div>
    </div>
);
};

const mapStateToProps = (state) => {
return {
    food: state.food_Reducer,
    exercise: state.exercise_Reducer.exercise,
    calories: state.exercise_Reducer.calories,
    editToggle: state.exercise_Reducer.editToggle,
};
};

const mapDispatchToProps = (dispatch) => {
return {
    addFood: (newMealName, newCalories) =>
    dispatch({
        type: "ADD_NEW_FOOD",
        newFood: { mealName: newMealName, id: "", calories: newCalories },
    }),
    addExercise: (exerciseCalorieRef, exerciseRef) =>
    dispatch({
        type: "ADD_NEW_EXERCISE",
        exercise: {
        id: 1,
        name: exerciseRef.current.value,
        calories: exerciseCalorieRef.current.value,
        },
    }),
    editExercise:(targetID) => dispatch({type: "EDIT_EXERCISE", targetID: targetID})

};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
