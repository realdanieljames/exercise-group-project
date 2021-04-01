

const initialState = {
    exercise: [],
    calories: 0,
  

}

const exerciseReducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_NEW_EXERCISE":
          let newArr = [...state.exercise].concat([action.exercise])
            return {
            ...state,
            exercise: newArr,
            calories: state.calories + Number(action.exercise.calories)
            }
        case "EDIT_EXERCISE":
        
            let newExercises = [...state.exercise].map((item) => {
                if(item.id === action.targetID){
                    item.editToggle = true
                    return item
                }else return item
            })
            return {
                ...state,
                exercise: newExercises

            }
        case "SUBMIT_EDIT_CHANGES":
            console.log('beginning');
            let totalCalories =0
            let editedExercises = [...state.exercise].map((item) => {
                console.log(item.calories);
                
                if(item.id === action.targetID) {
                    item.name = action.newExercise
                    item.calories = action.newCalories
                    item.editToggle = false
                    totalCalories+= Number(action.newCalories)
                    return item
                }else {
                    totalCalories+= Number(item.calories)
                    return item
                }
            })




            
            return {
                ...state,
                exercise: editedExercises,
                calories: totalCalories
            }
        default : 
        return state
    }
}

export default exerciseReducer
