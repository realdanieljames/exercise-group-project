import './App.css';
import {BrowserRouter} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import ExerciseCalories from './components/ExerciseCalories/ExerciseCalories'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <MainPage  />


      
      </BrowserRouter>


    </div>
  );
}

export default App;
