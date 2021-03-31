import React, {createRef, useRef} from 'react'

const ExerciseCalories = (props) => {

    const exerciseRef = createRef()
    const caloriesRef = createRef()
    console.log(props);
    
    return (
        <div>
          <input placeholder="Type Exercise Here" ref={exerciseRef} />
        <input placeholder="Type Calories Here" ref={caloriesRef} />
        <button onClick={() => props.addExercise(caloriesRef, exerciseRef)} >Add Exercise</button>
        <p>Total Calories: {props.calories}</p>
        {props.exerciseState.map((item, i) => {
            console.log(item);
         return   <div key={i+1}>
             <h2>Exercise {i + 1}</h2>
             <p>{item.name}</p>
             <p>{item.calories}</p>
             </div>
        })}
        </div>
    )
}

export default ExerciseCalories
