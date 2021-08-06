import { Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import * as toastMessage from "../../toast/toastMessage";
import "./Login.css";

function Login() {
  const history = useHistory();

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const response = await axios.post(
        "https://your-ecommerce.herokuapp.com/users/login",
        values
      );
      console.log(response.data);
      const authentication_token = response.data.authentication_token;
      localStorage.setItem("authentication_token", authentication_token);
      if (response.status === 200) {
        history.push("/profile");
      }
    } catch (error) {
      console.log(error);
      toastMessage.toastError("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      <img
        className="login__backgroundImage"
        src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/modules/account/image/login-img.9347138.png"
        alt=""
      />
      <div className="login__title">
        <h1>Kênh admin</h1>
      </div>
      <div className="login__note">
        <p>
          Chào mừng bạn đến với trang admin của shop Eco, để chuyển đến trang
          mua bán hàng
        </p>
        <a
          className="login__link"
          href="https://shopeco-manage.netlify.app/"
          target="blank"
        >
          Vui lòng click vào đây
        </a>
      </div>
      <div className="login__container">
        <h1>Đăng nhập</h1>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            className="login__label"
            label="Tên đăng nhập"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên đăng nhập!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="login__label"
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input.Password />
          </Form.Item>

          <button type="submit" className="login__signInButton">
            Đăng nhập
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
