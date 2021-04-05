import "./MainPage.css";
import ExerciseCalories from "../../components/ExerciseCalories/ExerciseCalories";
import FoodCalories from "../FoodCalories/FoodCalories";

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
        <FoodCalories />
    </div>
    </div>
);
};


export default MainPage;
