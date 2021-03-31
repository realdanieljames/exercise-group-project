const initialState = {
    exercise: [],
    calories: 0

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
            ;
        default : 
        return state
    }
}

export default exerciseReducer