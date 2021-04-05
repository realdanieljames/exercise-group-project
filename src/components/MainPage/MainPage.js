import { connect } from "react-redux";
import "./MainPage.css";
import ExerciseCalories from "../../components/ExerciseCalories/ExerciseCalories";
import FoodCalories from "../FoodCalories/FoodCalories";
import { v4 as uuidv4 } from 'uuid'
import NavBar from '../NavBar/NavBar'
import CombinedComponent from '../CombinedComponent/CombinedComponent'


const MainPage = (props) => {

return (
    <div style={{backgroundColor: "#c7d6d5"}}>
    <div>
        <NavBar />
    </div>

    <div>
        <CombinedComponent />
    </div>

    <div className="main-container">
        {/* Exercise Component */}
        <ExerciseCalories />

        {/* Food Component */}
        <div >
        <FoodCalories props={props} />
        </div>
    </div>
    </div>
);
};

const mapStateToProps = (state) => {
return {
    food: state.food_Reducer,
};
};

const mapDispatchToProps = (dispatch) => {
return {
    addMeal: (newMealName, newCalories) =>
    dispatch({
        type: "ADD_NEW_FOOD",
        newFood: { mealName: newMealName, id: uuidv4(), calories: newCalories },
    }),
    editMeal:(targetID, newMealName, newCalories)=>dispatch({
        type: "EDIT_MEAL_NAME",
        editedMeal: {targetId: targetID, mealName:newMealName, calories: newCalories}
    }),
};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
