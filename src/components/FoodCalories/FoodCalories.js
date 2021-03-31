import React from 'react'

const FoodCalories = (props) => {
    console.log(props)

        return (
        <div>

          
            
            <h1>Food With Calorie Intake</h1>
            <div>
            <input placeholder='Add Food'></input>
            <input placeholder="Add Calories Amount"></input>
            <button>Add Meal</button>
            </div>
            <h2>Total Calorie Intake:{props.mealCalories}</h2>

            {props.mealName}

        </div>
    )
}

export default FoodCalories
