import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/pages/Login";
import HomePage from "./Components/HomePage";
import PrivateRoute from "./Components/shared/PrivateRoute";
//import Listing from "./Components/pages/Listing";
import AdminPortal from "./Components/pages/AdminPortal";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Login" exact>
            <Login />
          </Route>
          <PrivateRoute path="/submissions">
            <AdminPortal />
          </PrivateRoute>

          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
