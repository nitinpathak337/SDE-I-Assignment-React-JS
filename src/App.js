// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
