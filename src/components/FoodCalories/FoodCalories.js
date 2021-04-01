import React, { useRef } from "react";
import "./FoodCalories.css";

//===========================================================================================//
//===========================================================================================//
const FoodCalories = (props) => {
const foodRef = useRef();
const foodCalorieRef = useRef();

//===========================================================================================//
//===========================================================================================//

return (
    <div>
    <h1>Add Meals</h1>
    <div className="add-meal-input-fields">
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
    <h3>
        Total Calorie Intake:{props.props.food.totalCaloriesFromAddedFoods}
    </h3>

    <div className="meal-container">
        {props.props.food.food.map((value) => {
        return (
            <div className="meal">
            <p> Meal: <br/>{value.mealName}</p>
            <button>edit</button>

            <p> Total Calories: <br/>{value.calories}</p>
            <button onClick={()=>console.log('rer')}>edit</button>
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
