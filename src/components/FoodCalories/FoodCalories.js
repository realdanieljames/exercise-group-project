import React, { useRef, useState } from "react";
import "./FoodCalories.css";

//===========================================================================================//
//===========================================================================================//
const FoodCalories = (props) => {
const addMealRef = useRef();
const addMealCaloriesRef = useRef();

const editMealNameRef = useRef();
const editMealCalorieRef = useRef();

const [showEditField, setShowEditField] = useState(false);
//===========================================================================================//
//===========================================================================================//

return (
    <div>
    <h1>Add Meals</h1>
    <div className="add-meal-input-fields">
        <input placeholder="Add Food" ref={addMealRef} />
        <input placeholder="Add Calories Amount" ref={addMealCaloriesRef} />
        <button
        onClick={() =>
            props.props.addMeal(
            addMealRef.current.value,
            addMealCaloriesRef.current.value
            )
        }
        >
        Add Meal
        </button>
    </div>
    <h3>
        Total Calorie Intake:{props.props.food.totalCaloriesFromAddedFoods}

    </h3>
{/*  //===========================================================================================//*/}
    <div className="meal-container">
        {props.props.food.food.map((value) => {
        return (
            <div className="meal">
            {showEditField ? (
                <div>
                <p>
                    {" "}
                    Meal: <br />
                </p>
                <input defaultValue={value.mealName} ref={editMealNameRef}/>
                </div>
            ) : (
                <p>
                {" "}
                Meal: <br />
                {value.mealName}
                </p>
            )}

            <button
                onClick={() => {
                setShowEditField(true);
                props.props.editMeal();
                }}
            >
                {showEditField ? "submit" : "edit"}
                {/* edit */}
            </button>
{/*  //===========================================================================================//*/}
            <p>
                {" "}
                Total Calories: <br />
                {value.calories}
            </p>
            <input></input>
            <button onClick={() => console.log("rere")}>edit</button>
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
