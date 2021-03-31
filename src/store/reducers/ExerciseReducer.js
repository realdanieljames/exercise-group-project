const initialState = {
    exercise: []

}

const exerciseReducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_NEW_EXERCISE":
          let newArr = [...state.exercise].concat([action.exercise])
            newArr.push(action.exercise)
            return {
                
            ...state,
            exercise: newArr
            
            
               
                
            }
            ;
        default : console.log(`Rubens State: ${state.exercise}`)
        return state
    }
}

export default exerciseReducer