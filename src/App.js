import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Pages/Homepage/Homepage";
import ShopPage from "./components/Pages/ShopPage/ShopPage";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Fragment>
  );
}

export default App;
