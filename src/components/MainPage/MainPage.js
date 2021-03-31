import React from "react";
import { connect } from "react-redux";
import FoodCalories from "../FoodCalories/FoodCalories";

const MainPage = (props) => {
    console.log(props.food)
return (
    <div>
    <div>
        <p>Main Page</p>
    </div>
    {props.food.map((value)=>{
        return(
            <FoodCalories/>

        )

    })}
    <FoodCalories/>
    
        </div>
    
        
)
}

const mapStateToProps = (state) => {
return {
    food: state.food_Reducer.food,
};
};

const mapDispatchToProps = (dispatch) => {
return {
    addFood: () =>
    dispatch({
        type: "ADD_NEW_FOOD",
        newFood: { name: "Cheddaer CHd", id: "ps1234", calories: "245" },
    }),
    // addClassToStudent: (id, newClass) => dispatch({type: "ADD_CLASS_TO_STUDENT", targetId: id, class: newClass})
};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
