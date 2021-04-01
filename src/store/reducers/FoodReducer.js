const initialState = {
  food: [],
  totalCaloriesFromAddedFoods: 0
};


//===========================================================================================//
//===========================================================================================//


const foodReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_NEW_FOOD":
      return {
        ...state,
        food: [...state.food, action.newFood],
        totalCaloriesFromAddedFoods: state.totalCaloriesFromAddedFoods + Number(action.newFood.calories)
      };

    default:
      return state;
  }
};
//===========================================================================================//
//===========================================================================================//
export default foodReducer;
