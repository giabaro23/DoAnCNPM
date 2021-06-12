import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import * as toastMessage from "../../toast/toastMessage";
import { getProfileUser } from "../../action/userAction";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://your-ecommerce.herokuapp.com/users/login",
        data
      );
      console.log(response.data.email);
      const authentication_token = response.data.authentication_token;
      localStorage.setItem("authentication_token", authentication_token);
      if (response.status === 200) {
        history.push("/trangchu");
      }
    } catch (error) {
      console.log(error);
      toastMessage.toastError("Login fail. Please login again!");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Đăng nhập</h1>
        <form onSubmit={handleSubmit}>
          <h5>Tên đăng nhập</h5>
          <input
            type="text"
            placeholder="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Mật khẩu</h5>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__signInButton">
            Đăng nhập
          </button>
        </form>

        <button className="login__registerButton">
          Đăng kí tài khoản admin
        </button>
      </div>
    </div>
  );
}

export default Login;
