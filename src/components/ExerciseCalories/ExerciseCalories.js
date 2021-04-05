import React, {createRef, useRef, useState} from 'react'
import {connect} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import './ExerciseCalories.css'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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
            caloriesRef.current.value = ""
            exerciseRef.current.value =""
        }
    }
 
    return (
        <div style={{backgroundColor: "#595758", color: 'white',
        borderRadius: "20px"}} className="exercise-object">
            <h1  >Add Exercises</h1>
          <Input id="filled-basic" size="small" style={{color: 'white',}} placeholder="Exercises"inputProps={{ 'aria-label': 'description' }} variant="filled" inputRef={exerciseRef} />
          <Input id="filled-basic" size="small" style={{color: 'white',}} placeholder="Calories"inputProps={{ 'aria-label': 'description' }} variant="filled"  inputRef={caloriesRef}  />
        
        {numberError? <div>Please enter a number</div>: null}
        <Button variant="contained" size="small" color="primary" onClick={numberCheck} endIcon={<SaveIcon />}>Save</Button>
        <p>Total Burned Calories: {props.calories}</p>
        <div className='exercise-container'>
             {props.exercise.map((item, i) => {
             return   <div key={i+1}>

            {!item.editToggle ? <div>
                        
                        <h2>{item.name}</h2>
                        <h3>{item.calories}</h3>
                        <Button variant="contained" size="small" color="primary" endIcon={<EditIcon /> } onClick={() => props.editExercise(item.id)} ></Button>
                        <Button variant="contained" size="small" color="secondary" endIcon={<DeleteIcon />}  onClick={() => props.deleteExercise(item.id, item.calories) }></Button>
             </div>: 
             <div>
                 <input placeholder="Change name here" ref={tempExcercise}/>
                 <input placeholder="Change calories here" ref={tempCalories}/>
                 <button onClick={() => props.submitEditExerciseValue(tempExcercise.current.value, tempCalories.current.value, item.id)} >Submit</button>
                 </div>}
             </div>
           })}
              </div>
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
