import "./App.css";
import {Redirect, Route, Switch} from "react-router-dom"; 
import Home from "./Components/Homepage/Home" 

const App = () => {
  return (
    <div> 
      <Switch> 

      <Route path="/" exact>
        <Redirect to ="/home" />
        </Route> 

        <Route path="/home"> 
        <Home /> 
      </Route>

      </Switch>
    </div>  
  );
}  

export default App;
