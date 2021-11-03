import "./App.css";
import  Registeration from "./components/Registeration";
import  Login from "./components/Login";
import  ForgetPassword from "./components/ForgetPassword";
import  ResetPassWord from "./components/ResetPassword"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Registeration} />
          <Route path="/login" exact component={Login} />
          <Route path="/forgot" exact component={ForgetPassword} />
          <Route path="/reset/:token" exact component={ResetPassWord} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
