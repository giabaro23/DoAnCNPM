import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./DropdownMenu.css";

function DropdownMenu() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push("/login");
  }
  return (
    <div className="dropdown">
      <ul>
        <li>
          <NavLink to="/profile">Trang cá nhân</NavLink>
        </li>
        <li onClick={logout}>Đăng xuất</li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
