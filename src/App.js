import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getProfileUser } from "./action/userAction";
import userAPI from "./API/userAPI";
import "./App.css";
import SumUser from "./components/chart/sumUser/SumUser";
import Header from "./components/header/Header";
import ListClient from "./components/home/listUser/client/ListClient";
import ProfileForm from "./components/home/listUser/client/ProfileForm";
import ListSeller from "./components/home/listUser/seller/ListSeller";
import Menu from "./components/home/menu/Menu";
import AdminProfile from "./components/home/profile/AdminProfile";
import Login from "./components/login/Login";
import ProductDetail from "./components/product/ProductDetail";
import ProductList from "./components/product/ProductList";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProfileUser = async () => {
      try {
        const response = await userAPI.getProfile();
        dispatch(getProfileUser(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfileUser();
  }, [dispatch]);
  const token = localStorage.getItem("authentication_token");
  return (
    <Router>
      {/* {!token ? <Redirect to="/" /> : <Redirect to="/trangchu" />} */}
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/login" />;
            }}
          ></Route>
          {!token ? (
            <Route exact path="/login">
              <Login />
            </Route>
          ) : (
            <Switch>
              <Route exact path="/profile/:userId">
                <Header />
                <Menu />
                <ProfileForm />
              </Route>

              <Route path="/chart">
                <Header />
                <Menu />
                <SumUser />
              </Route>
              <Route exact path="/product">
                <Header />
                <Menu />
                <ProductList />
              </Route>
              <Route exact path="/profile">
                <Header />
                <Menu />
                <AdminProfile />
              </Route>
              <Route exact path="/profile/:profileId">
                <Header />
                <Menu />
                <AdminProfile />
              </Route>
              <Route exact path="/client">
                <Header />
                <Menu />
                <ListClient />
              </Route>
              <Route exact path="/seller">
                <Header />
                <Menu />
                <ListSeller />
              </Route>
              <Route exact path="/product/:productId">
                <Header />
                <Menu />
                <ProductDetail />
              </Route>
            </Switch>
          )}
          {/* <Route exact path="/">
            <Login />
          </Route> */}
        </Switch>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
