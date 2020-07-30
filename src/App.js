import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Pages/Homepage/Homepage";
import ShopPage from "./components/Pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Fragment>
  );
}

export default App;
