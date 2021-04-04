import React from 'react'
import {connect} from 'react-redux'

const CombinedComponent = (props) => {
    let burnedCalories = props.calories
    let earnedCalories = props.food.totalCaloriesFromAddedFoods

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

const mapStateToProps = (state) => {
    return {
        food: state.food_Reducer,
        exercise: state.exercise_Reducer.exercise,
        calories: state.exercise_Reducer.calories
    };
    };

export default connect(mapStateToProps)(CombinedComponent)
