import React, { createRef, useRef } from "react";
import { connect } from "react-redux";
import "./MainPage.css";
import ExerciseCalories from "../../components/ExerciseCalories/ExerciseCalories";
import FoodCalories from "../FoodCalories/FoodCalories";

const MainPage = (props) => {
console.log(props);
return (
    <div>
    <div>
        <p>Main Page</p>
    </div>

    {/* Exercise Component */}
    <ExerciseCalories
        exerciseState={props.exercise}
        addExercise={props.addExercise}
        calories={props.calories}
    />

    {/* Food Component */}
    <div style={{ border: "1px solid black" }}>
        <FoodCalories props={props} />
    </div>
    </div>
);
};
//     </div>
// )
// }

const mapStateToProps = (state) => {
return {
    food: state.food_Reducer.food,
    exercise: state.exercise_Reducer.exercise,
    calories: state.exercise_Reducer.calories,
};
};

const mapDispatchToProps = (dispatch) => {
return {
    // addFood: () => dispatch({type:"ADD_NEW_FOOD", newFood: {name: "Cheddaer CHd", id: "ps1234", calories: "245"}}),
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
};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
