import "./MainPage.css";
import ExerciseCalories from "../../components/ExerciseCalories/ExerciseCalories";
import FoodCalories from "../FoodCalories/FoodCalories";
import {connect} from 'react-redux'
import NavBar from '../NavBar/NavBar'
import CombinedComponent from '../CombinedComponent/CombinedComponent'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { logDOM } from "@testing-library/dom";
import {useEffect} from 'react'


const MainPage = (props) => {
    console.log(props);

    useEffect(() => {
        axiosCall()
        
    },[])




    async function axiosCall(){

        let decoded = jwt_decode(window.localStorage.getItem("jwtToken"))
        try {
            let success = await axios.post("http://localhost:3001/api/users/getData", {
            email: decoded.email
         
        })


        

        let data =  success.data.data
        console.log(data);

    
        props.showData(data.exercises)
        props.sendFood(data.food)
        
        } catch (error) {
            
        }
    
    }


    const saveToBackend = async () => {

        let decoded = jwt_decode(window.localStorage.getItem("jwtToken"))
        try {
            console.log('hello 2');
            let success = await axios.post("http://localhost:3001/api/users/postData", {
            email: decoded.email,
            exercises: props.exercise,
            calories: props.calories,
            food: props.food
    
         
        })
        
        console.log(success);
        } catch (error) {
            
        }  
    }




return (
    <div style={{backgroundColor: "#c7d6d5"}}>
    <div>
        <NavBar />
    </div>

    <div>
        <CombinedComponent />
    </div>
    <button onClick={saveToBackend}>save</button>

    <div className="main-container">
        {/* Exercise Component */}
        <ExerciseCalories />

        {/* Food Component */}
        <FoodCalories />
    </div>
    </div>
);
};




const mapStateToProps = (state) => {
    return {
        exercise: state.exercise_Reducer.exercise,
        calories: state.exercise_Reducer.calories,
        food: state.food_Reducer
        
    };
    };

    const mapDispatchToProps =(dispatch) => {
       return { 
           showData: (exercises) => dispatch({type: "SHOW_DATA", exercises: exercises}),
           sendFood: (food) => dispatch({type: "SHOW_FOOD", food: food})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
