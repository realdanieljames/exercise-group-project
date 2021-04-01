import React, {createRef, useRef} from 'react'
import './ExerciseCalories'

const ExerciseCalories = (props) => {

    const exerciseRef = createRef()
    const caloriesRef = createRef()

    const tempExcercise = createRef()
    const tempCalories = createRef()
   console.log(props); 
    return (
        <div className="exercise-object">
          <input placeholder="Type Exercise Here" ref={exerciseRef} />
        <input placeholder="Type Calories Here" ref={caloriesRef} />
        <button onClick={() => props.addExercise(caloriesRef, exerciseRef)} >Add Exercise</button>
        <p>Total Calories: {props.calories}</p>
        
        {props.exerciseState.map((item, i) => {
         return   <div key={i+1}>

            {!item.editToggle ? <div>
                        <h2>Exercise {i + 1}</h2>
                        <p>{item.name}</p>
                        <p>{item.calories}</p>
                        <button onClick={() => props.editExercise(item.id)} >Edit</button>
             </div>: <div>
                 <input ref={tempExcercise}/>
                 <input ref={tempCalories}/>
                 <button >Submit</button>
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
