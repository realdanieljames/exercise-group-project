import React, {createRef, useRef, useState} from 'react'
import {connect} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import './ExerciseCalories'


const ExerciseCalories = (props) => {
    
     
    const exerciseRef = createRef()
    const caloriesRef = createRef()

    const tempExcercise = createRef()
    const tempCalories = createRef()

    const [numberError, setNumberError] = useState(false)
    
    const numberCheck = () => {
            
     


        if( isNaN((Number(caloriesRef.current.value) * 1))){
            setNumberError(true)
            return
        }else {
            setNumberError(false)
            
            props.addExercise(caloriesRef, exerciseRef)
        }
    }
 
    return (
        <div className="exercise-object">
            <h1>Add Exercises</h1>
          <input placeholder="Type Exercise Here" ref={exerciseRef} />
        <input  placeholder="Type Calories Here" ref={caloriesRef} />
        {numberError? <div>Please enter a number</div>: null}
        <button onClick={numberCheck} >Add Exercise</button>
        <p>Total Burned Calories: {props.calories}</p>
        
        {props.exercise.map((item, i) => {
         return   <div key={i+1}>

            {!item.editToggle ? <div>
                        <h2>Exercise {i + 1}</h2>
                        <p>{item.name}</p>
                        <p>{item.calories}</p>
                        <button onClick={() => props.editExercise(item.id)} >Edit</button>
                        <button onClick={() => props.deleteExercise(item.id, item.calories) }>Delete</button>
             </div>: 
             <div>
                 <input placeholder="Change name here" ref={tempExcercise}/>
                 <input placeholder="Change calories here" ref={tempCalories}/>
                 <button onClick={() => props.submitEditExerciseValue(tempExcercise.current.value, tempCalories.current.value, item.id)} >Submit</button>
                 </div>}



             </div>
        
        })}
        </div>
       
    )
}

const mapStateToProps = (state) => {
    return {
        exercise: state.exercise_Reducer.exercise,
        calories: state.exercise_Reducer.calories,
        
    };
    };
    
    const mapDispatchToProps = (dispatch) => {
    return {
        addExercise: (exerciseCalorieRef, exerciseRef) =>
        dispatch({type: "ADD_NEW_EXERCISE", exercise: {
            id: uuidv4(),
            name: exerciseRef.current.value,
            calories: exerciseCalorieRef.current.value,
            },
        }),
        editExercise:(targetID) => dispatch({type: "EDIT_EXERCISE", targetID: targetID}),
        submitEditExerciseValue: (newExercise, newCalories, targetID) => dispatch({type:"SUBMIT_EDIT_CHANGES", newExercise: newExercise, newCalories: newCalories, targetID:targetID}),
        deleteExercise: (targetID, calories) => dispatch({type: "DELETE_EXERCISE", targetID: targetID, calories: calories})
    
    };
    };

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCalories)
