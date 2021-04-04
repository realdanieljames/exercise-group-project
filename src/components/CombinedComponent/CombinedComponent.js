import React from 'react'

const CombinedComponent = (props) => {
    let burnedCalories = props.props.calories
    let earnedCalories = props.props.food.totalCaloriesFromAddedFoods

    console.log(props);
    return (
        <div>
            <h1>Exercise and Food Summary</h1>
           <p>Burned Calories: {burnedCalories}</p> 
           <p>Earned Calories: {earnedCalories}</p> 
           <p>Total Calories: {earnedCalories - burnedCalories} </p>



        </div>
    )
}

export default CombinedComponent
