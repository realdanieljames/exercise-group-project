import React, {createRef, useRef} from 'react'
import './ExerciseCalories'

const ExerciseCalories = (props) => {
    
     
    const exerciseRef = createRef()
    const caloriesRef = createRef()

    const tempExcercise = createRef()
    const tempCalories = createRef()
 
    return (
        <div className="exercise-object">
            <h1>Add Exercises</h1>
          <input placeholder="Type Exercise Here" ref={exerciseRef} />
        <input placeholder="Type Calories Here" ref={caloriesRef} />
        <button onClick={() => props.props.addExercise(caloriesRef, exerciseRef)} >Add Exercise</button>
        <p>Total Burned Calories: {props.props.calories}</p>
        
        {props.props.exercise.map((item, i) => {
         return   <div key={i+1}>

            {!item.editToggle ? <div>
                        <h2>Exercise {i + 1}</h2>
                        <p>{item.name}</p>
                        <p>{item.calories}</p>
                        <button onClick={() => props.props.editExercise(item.id)} >Edit</button>
             </div>: 
             <div>
                 <input placeholder="Change name here" ref={tempExcercise}/>
                 <input placeholder="Change calories here" ref={tempCalories}/>
                 <button onClick={() => props.props.submitEditExerciseValue(tempExcercise.current.value, tempCalories.current.value, item.id)} >Submit</button>
                 </div>}



             {/* <h2>Exercise {i + 1}</h2>
             <p>{item.name}</p>
             <p>{item.calories}</p>
             */}
             </div>
        
        })}
        </div>
       
    )
}

export default ExerciseCalories
