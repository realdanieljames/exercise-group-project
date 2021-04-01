import React, { useRef } from "react";
import "./FoodCalories.css";

//===========================================================================================//
//===========================================================================================//
const FoodCalories = (props) => {
const foodRef = useRef("");
const foodCalorieRef = useRef("");

//===========================================================================================//
//===========================================================================================//
console.log(foodCalorieRef.current);
return (
    <div>
    <h1>Add Meals</h1>
    <div>
        <input placeholder="Add Food" ref={foodRef} />
        <input placeholder="Add Calories Amount" ref={foodCalorieRef} />
        <button
        onClick={() =>
            props.props.addFood(
            foodRef.current.value,
            foodCalorieRef.current.value
            )
        }
        >
        Add Meal
        </button>
    </div>
    <div>Total Calorie Intake:</div>

    <div className="meal-container">
        {props.props.food.map((value) => {
        return (
            <div className="meal">
            <p> Meal: {value.mealName}</p>
            <p> Total Calories: {value.calories}</p>
            </div>
        );
        })}
    </div>
    </div>
);
};
//===========================================================================================//
//===========================================================================================//

export default FoodCalories;
