import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./component/layouts/Navbar";
import Home from "./component/pages/Home";
import Notfound from "./component/pages/Notfound";
import AddUser from "./component/users/AddUser";
import EditUser from "./component/users/EditUser";
import User from "./component/users/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
