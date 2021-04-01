const initialState = {
    exercise: [],
    calories: 0,
    editToggle: false

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

            
            
        default : 
        return state
    }
}

export default exerciseReducer
