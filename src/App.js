import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./components/homepage/Home";
import StartPage from "./components/startpage/StartPage";
import Login from "./components/loginpage/Login";
import SignUp from "./components/signup/SignUp";
import Explore from "./components/explore/Explore";


function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" component={StartPage} exact />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/explore" component={Explore} />
      </Switch>
    </div>
  );
}

export default App;
