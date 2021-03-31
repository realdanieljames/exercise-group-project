import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import ExerciseCalories from './components/ExerciseCalories/ExerciseCalories'
import Login from './components/Login/Login'

function App() {


  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Login}/>
      <Route exact path="/main-page" component={MainPage} />
      <Route exact path="/exercise" component={ExerciseCalories} />

      
      </Router>


    </div>
  );
}

export default App;
