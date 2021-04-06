import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./FoodCalories.css";


//===========================================================================================//
//===========================================================================================//

const FoodCalories = (props) => {
const addMealRef = useRef();
const addMealCaloriesRef = useRef();
const editMealNameRef = useRef();
const editMealCalorieRef = useRef();

// const [showEditFieldMeal, setShowEditFieldMeal] = useState(false);
const [numberError, setNumberError] = useState(false);

const numberCheck = () => {
    if (isNaN(Number(addMealCaloriesRef.current.value) * 1)) {
    setNumberError(true);
    return;
    } else {
    setNumberError(false);

    props.addMeal(
        addMealRef.current.value,
        addMealCaloriesRef.current.value,

        (addMealRef.current.value = ""),
        (addMealCaloriesRef.current.value = "")
    );
    }
};
//===========================================================================================//
//===========================================================================================//

return (
    <div
    style={{
        backgroundColor: "#595758",
        color: "white",
        borderRadius: "20px",
    }}
    >
    <h1>Add Meals</h1>

    <Input
        id="filled-basic"
        size="small"
        style={{ color: "white" }}
        placeholder=" Meal"
        inputProps={{ "aria-label": "description" }}
        variant="filled"
        inputRef={addMealRef}
    />
    <Input
        id="filled-basic"
        size="small"
        style={{ color: "white" }}
        placeholder=" Calories"
        inputProps={{ "aria-label": "description" }}
        variant="filled"
        inputRef={addMealCaloriesRef}
    />

    {numberError ? <div>Please enter a number</div> : null}
    <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={numberCheck}
        endIcon={<SaveIcon />}
    >
        Save
    </Button>

    <p>Total Calorie Intake:{props.food.totalCaloriesFromAddedFoods}</p>
    {/*  //===========================================================================================//*/}
    <div className="meal-container">
        {props.food.food.map((value) => {
        return (
            <div key={value.id} className="meal">
            {!value.editToggle ? (
                <div
                style={{ backgroundColor: "#3f51b5", borderRadius: "20px" }}
                >
                <h2> {value.mealName}</h2>
                <h3>{value.calories}</h3>

                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    endIcon={<EditIcon />}
                    onClick={() => {
                    // showEditFieldMeal
                        // ? setShowEditFieldMeal(false)
                        // : setShowEditFieldMeal(true);
                        
                    props.editMeal(value.id);


                    }}
                ></Button>
                <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    endIcon={<DeleteIcon />}
                    onClick={() => props.deleteMeal(value.id)}
                ></Button>
                </div>
            ) : (
                <div>
                Meal Name:
                <input
                    defaultValue={value.mealName}
                    placeholder={"Enter meal name"}
                    ref={editMealNameRef}
                />
                Calories:
                <input
                    defaultValue={value.calories}
                    placeholder={"Enter calorie amount"}
                    ref={editMealCalorieRef}
                />
                <button onClick={() => props.submitEditedFoodValue(value.id, editMealNameRef.current.value, editMealCalorieRef.current.value )}>
                    Submit
                </button>
                </div>
            )}
            </div>
        );
        })}
    </div>
    </div>
);
};
//===========================================================================================//
//===========================================================================================//
const mapStateToProps = (state) => {
return {
    food: state.food_Reducer,
};
};
//===========================================================================================//
//===========================================================================================//

const mapDispatchToProps = (dispatch) => {
return {
    addMeal: (newMealName, newCalories) =>
    dispatch({
        type: "ADD_NEW_FOOD",
        newFood: {
        editToggle:false,
        mealName: newMealName,
        id: uuidv4(),
        calories: Number(newCalories),
        },
    }),
    //===========================================================================================//
    editMeal: (targetID) =>
    dispatch({
        type: "EDIT_MEAL_AND_CALORIES",

        id: targetID,
    
    }),

    submitEditedFoodValue:(targetID, meal , calories) =>dispatch({
        type: "SUBMIT_EDITED_MEAL",
        targetID:targetID,
        meal:meal,
        calories: calories
    }),
    //===========================================================================================//
    deleteMeal: (targetID, newCalories) =>
    dispatch({
        type: "DELETE_MEAL",
        targetID: targetID,
        calories: newCalories,
    }),
};
};
//===========================================================================================//
//===========================================================================================//

export default connect(mapStateToProps, mapDispatchToProps)(FoodCalories);
