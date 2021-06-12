import React, { useState } from "react";
import "./Main.css";
import Menu from "../../home/menu/Menu";
import AdminProfile from "../../home/profile/AdminProfile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Client from "../../home/user/table/Client";
import Seller from "../../home/user/table/Seller";
import ProductList from "../../product/ProductList";
import SumUser from "../../chart/sumUser/SumUser";

function main() {
  const token = localStorage.getItem("authentication_token");

  return (
    <div>
      {/* {!token ? (
        <Redirect to="/" />
      ) : (
        <Router>
          <div className="main">
            <Menu />
            <Switch>
              <Route path="/profile">
                <AdminProfile />
              </Route>
              <Route path="/client">
                <Client />
              </Route>
              <Route path="/seller">
                <Seller />
              </Route>
              <Route path="/product">
                <ProductList />
              </Route>
              <Route path="/chart">
                <SumUser />
              </Route>
            </Switch>
          </div>
        </Router>
      )} */}
    </div>
  );
}

export default main;
