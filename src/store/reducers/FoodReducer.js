

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
//===========================================================================================//
    case "EDIT_MEAL_AND_CALORIES":
           
        let newMeal = [...state.food].map((item) => {

            if (item.id === action.id) {
                item.editToggle = true
                return item
            } else return item
        })
        console.log(newMeal);     
        return {
            ...state,
            food: newMeal

        }
//===========================================================================================//
    case "SUBMIT_EDITED_MEAL":
        console.log('beginning');
        let totalCalories = 0
        let editedMeals = [...state.food].map((item) => {
           
console.log(item)
console.log(action.targetID)
            if (item.id === action.targetID) {
                item.mealName = action.meal
                item.calories = action.calories
                item.editToggle = false
                totalCalories += Number(action.calories)
                return item
            } else {
                totalCalories += Number(item.calories)
                return item
            }
        })
   
        return {
            ...state,
            food: editedMeals,
            totalCaloriesFromAddedFoods: totalCalories
        }



//===========================================================================================//
    case "DELETE_MEAL":
    let arrayAfterDelete = [...state.food].filter((value) => {
        action.calories = value.calories;

        return value.id !== action.targetID;
    });
    return {
        ...state,
        food: arrayAfterDelete,
        totalCaloriesFromAddedFoods:
        state.totalCaloriesFromAddedFoods - Number(action.calories),
    };
    case "SHOW_FOOD":
        return {
            ...state,
            food: action.food
        }
//===========================================================================================//
    default:
    return state;
}
};
//===========================================================================================//
//===========================================================================================//
export default foodReducer;

