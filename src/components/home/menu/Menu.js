import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";
import { MenuData } from "./MenuData";
import { useSelector } from "react-redux";

function Menu() {
  const userInfo = useSelector((state) => state.infoUser);

  return (
    <div className="menu">
      <div className="menu__container">
        <div className="menu__profile">
          <img className="menu__img" src={userInfo.url} alt="" />
          <p>{userInfo.fullName}</p>
        </div>
        {MenuData.map((menuItem, index) => {
          return <MenuItem key={index} items={menuItem} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
