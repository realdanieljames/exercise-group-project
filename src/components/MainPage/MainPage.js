import React, { createRef, useRef } from "react";
import { connect } from "react-redux";
import "./MainPage.css";
import ExerciseCalories from "../../components/ExerciseCalories/ExerciseCalories";
import FoodCalories from "../FoodCalories/FoodCalories";
import { v4 as uuidv4 } from 'uuid'
import NavBar from '../NavBar/NavBar'
import { combineReducers } from "redux";
import CombinedComponent from '../CombinedComponent/CombinedComponent'


const MainPage = (props) => {

return (
    <div>
    <div>
        <NavBar />
    </div>

    <div>
        <CombinedComponent props={props}/>
    </div>

    <div className="main-container">
        {/* Exercise Component */}
        <ExerciseCalories props={props}
        

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
    
};
};

const mapDispatchToProps = (dispatch) => {
return {
    addMeal: (newMealName, newCalories) =>
    dispatch({
        type: "ADD_NEW_FOOD",
        newFood: { mealName: newMealName, id: uuidv4(), calories: newCalories },
    }),
    editMeal:(targetID, newMealName, newCalories)=>dispatch({
        type: "EDIT_MEAL_NAME",
        editedMeal: {targetId: targetID, mealName:newMealName, calories: newCalories}
    }),
    addExercise: (exerciseCalorieRef, exerciseRef) =>
    dispatch({
        type: "ADD_NEW_EXERCISE",
        exercise: {
        id: uuidv4(),
        name: exerciseRef.current.value,
        calories: exerciseCalorieRef.current.value,
        },
    }),
    editExercise:(targetID) => dispatch({type: "EDIT_EXERCISE", targetID: targetID}),
    submitEditExerciseValue: (newExercise, newCalories, targetID) => dispatch({type:"SUBMIT_EDIT_CHANGES", newExercise: newExercise, newCalories: newCalories, targetID:targetID})

};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
