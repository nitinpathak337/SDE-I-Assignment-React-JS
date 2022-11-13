import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddItem} />
      </Switch>
      <ToastContainer closeButton={true} position="bottom-center" />
    </>
  );
}

export default App;
