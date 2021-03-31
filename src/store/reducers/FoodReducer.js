const initialState ={
    food: [
        {mealName: 'apple cheddar', id:'1234', calories: '24'},
        {mealName: 'apple cheddar', id:'1234', calories: '24'},
        {mealName: 'apple cheddar', id:'1234', calories: '24'},
    ]
}



const foodReducer = (state = initialState, action) => {

    console.log(state)
    switch (action.type) {
        case "ADD_NEW_FOOD":
            return {
                ...state,
                food: [...state.food, action.newFood]
            }

        default:
            console.log("Hey we got to the default - Class");
            return state
    }
}

export default foodReducer;