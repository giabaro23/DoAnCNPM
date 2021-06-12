import React, { useEffect, useState } from "react";
import "./Header.css";
import * as CgIcons from "react-icons/cg";
import * as BsIcons from "react-icons/bs";
import { Link, NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProfileUser, userLogin } from "../../action/userAction";
import userAPI from "../../API/userAPI";

function Header() {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("authentication_token");
    history.push("/");
  };

  const userInfo = useSelector((state) => state.infoUser);

  return (
    <div className="header">
      <div className="header__logo">
        <h1>Admin</h1>
      </div>
      <div className="header__content">
        <BsIcons.BsGrid className="header__icon"></BsIcons.BsGrid>
        <CgIcons.CgBell className="header__icon"></CgIcons.CgBell>

        <Link to="/profile" className="header__profile">
          <img className="header_img" src={userInfo.url} alt="" />
          <span className="header__user">{userInfo.fullName}</span>
        </Link>
        <button className="header__logout" onClick={logout}>
          Đăng xuất
        </button>
      </div>
    </div>
  );
}

export default Header;
