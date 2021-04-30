import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./components/homepage/Home";
import StartPage from "./components/startpage/StartPage";
import Login from "./components/loginpage/Login";
import CreateNew from "./components/createNewAccount/CreateNew";
import Explore from "./components/explore/Explore";


import CardDetail from "./components/explore/cardDetail/CardDetail";
function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" component={StartPage} exact />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/signup" component={CreateNew} />
      <Route path="/explore" component={Explore} />

      <Route path="/lists" component={CardDetail} />
      </Switch>
    </div>
  );
}

export default App;
