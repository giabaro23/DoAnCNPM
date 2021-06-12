import React, { useState } from "react";
import "./MenuItem.css";

import { NavLink, Link } from "react-router-dom";

function MenuItem({ items }) {
  const { iconClosed, iconOpened, icon, title, subNav, open } = items;
  const [isOpen, setOpen] = useState(open);
  const openSideNav = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="menuItem">
      <div className="menuItem__Item " onClick={items.subNav && openSideNav}>
        <div className="menuItem__title">
          {icon}
          <p>{title}</p>
        </div>

        <div className="menuItem__arrowI">
          {items.subNav && isOpen ? items.iconOpened : items.iconClosed}
        </div>
      </div>
      <div className="menu__sub">
        {isOpen &&
          subNav.map((sub, index) => {
            return (
              <NavLink
                to={sub.path}
                className="menuItem__sub"
                activeClassName="menuItem__sub-active"
              >
                <p>{sub.title}</p>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}

export default MenuItem;
