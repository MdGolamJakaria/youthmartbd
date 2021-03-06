import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Founders from "./Components/Founders/Founders";
import Investors from "./Components/Investors/Investors";
import Shops from "./Components/Shops/Shops";
import Products from "./Components/Products/Products";
import Employees from "./Components/Employees/Employees";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "./Components/Account/Account";
import RegisterForm from "./Components/Account/CreateAccount/RegisterForm/RegisterForm";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/account">
            <Account></Account>
          </Route>
          <Route path="/createaccount">
            <RegisterForm></RegisterForm>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/founders">
            <Founders></Founders>
          </Route>
          <Route path="/investors">
            <Investors></Investors>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/shops">
            <Shops></Shops>
          </Route>
          <Route path="/employees">
            <Employees></Employees>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
