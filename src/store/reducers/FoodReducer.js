const initialState = {
food: [],
totalCaloriesFromAddedFoods: 0,
};

//===========================================================================================//
//===========================================================================================//

const foodReducer = (state = initialState, action) => {
switch (action.type) {
    case "ADD_NEW_FOOD":
    return {
        ...state,
        food: [...state.food, action.newFood],
        totalCaloriesFromAddedFoods:
        state.totalCaloriesFromAddedFoods + Number(action.newFood.calories),
    };

    case "EDIT_MEAL_AND_CALORIES":
        console.log('edrefeit')
    default:
    return state;
}
};
//===========================================================================================//
//===========================================================================================//
export default foodReducer;

// case "EDIT_DRINK_NAME":
//             const editArr = state.drinkArray.map((currEl) => {
//                 if (currEl.id === action.targetId){
//                     return {
//                         ...currEl,
//                         name: action.newName
//                     }
//                 } else {
//                     return currEl
//                 }
//             })
//             return {
//                 ...state,
//                 drinkArray: editArr
//             }