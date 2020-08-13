import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import "./App.css";

const hatspage = () => <p>hats page</p>;
const menspage = () => <p>mens page</p>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={hatspage} />
        <Route exact path="/men" component={menspage} />
      </Switch>
    </div>
  );
}

export default App;
