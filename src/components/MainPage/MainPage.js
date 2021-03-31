import React, {createRef, useRef} from "react";
import { connect } from "react-redux";
import './MainPage.css'


const MainPage = (props) => {


const exerciseRef = createRef('')
const exerciseCalorieRef = createRef('')
return (
    <div>
    <div>
        <p>Main Page</p>
    </div>


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
    <h2>Meals</h2>
        {/* {props.food.map((value)=>{
            console.log(value)
        })} */}
    </div>
    
    </div>
);
};

const mapStateToProps = (state) => {
    return {
        food: state.food_Reducer.food,
        exercise: state.exercise_Reducer.exercise
        
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addFood: () => dispatch({type:"ADD_NEW_FOOD", newFood: {name: "Cheddaer CHd", id: "ps1234", calories: "245"}}),
        addExercise: (exerciseCalorieRef, exerciseRef) => dispatch({type: "ADD_NEW_EXERCISE", exercise:{id: 1, name: exerciseRef.current.value, calories: exerciseCalorieRef.current.value} })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
