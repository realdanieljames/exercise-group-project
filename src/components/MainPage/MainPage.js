import React, {createRef, useRef} from "react";
import './MainPage.css'
import { connect } from "react-redux";
import FoodCalories from "../FoodCalories/FoodCalories";



const MainPage = (props) => {


const exerciseRef = createRef('')
const exerciseCalorieRef = createRef('')
return (
    <div>
    <div>
        <p>Main Page</p>
    </div>
    {/* {props.food.map((value)=>{
        return(
            <FoodCalories/> */}


{/* Exercise Component */}

    <div style={{border: "1px solid black"}}>
    <h2>Add Exercise</h2>
    <div>
        <input placeholder="Type Exercise Here" ref={exerciseRef} />
        <input placeholder="Type Calories Here" ref={exerciseCalorieRef} />
        <button onClick={() => props.addExercise(exerciseCalorieRef, exerciseRef)} >Add Exercise</button>
        
        {props.exercise.map((exercise,i) => {
            return (
                <div>
                    <u>Exercise {i+1}</u><br></br>
                    {exercise.name}<br></br>
                    Calories: {exercise.calories}
                </div>
            )
        })}
    </div>

    </div>

{/* Food Component */}
<div style={{border: "1px solid black"}}>

    <FoodCalories props={props}/>

    </div>
    
    </div>
);
};

const mapStateToProps = (state) => {
    return {
        food: state.food_Reducer.food,
        exercise: state.exercise_Reducer.exercise
        

}}



const mapDispatchToProps = (dispatch) => {
    return {
        addFood: (newMealName, newCalories) => dispatch({type:"ADD_NEW_FOOD", newFood: {mealName: newMealName, id: "", calories: newCalories}}),
        addExercise: (exerciseCalorieRef, exerciseRef) => dispatch({type: "ADD_NEW_EXERCISE", exercise:{id: 1, name: exerciseRef.current.value, calories: exerciseCalorieRef.current.value} })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
