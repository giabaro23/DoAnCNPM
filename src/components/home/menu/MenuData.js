import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";

export const MenuData = [
  {
    title: "Thông tin của bạn",
    icon: (
      <AiIcons.AiOutlineUser fontSize="1.5em" color="rgba(0, 87, 145,0.8)" />
    ),
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    subNav: [
      {
        title: "Profile",
        path: "/profile",
      },
    ],
    open: true,
  },
  {
    title: "Quản lý người dùng",
    icon: (
      <AiIcons.AiOutlineUser fontSize="1.5em" color="rgba(0, 87, 145,0.8)" />
    ),
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    subNav: [
      {
        title: "Khách hàng",
        path: "/client",
      },
      {
        title: "Người bán hàng",
        path: "/seller",
      },
    ],
    open: true,
  },
  {
    title: "Quản lý sản phẩm",
    icon: (
      <AiIcons.AiOutlineShoppingCart
        fontSize="1.5em"
        color="rgb(236, 59, 59)"
      />
    ),
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    subNav: [
      {
        title: "Tất cả sản phẩm",
        path: "/product",
      },
    ],
    open: true,
  },
  {
    title: "Dữ liệu",
    icon: <BiIcons.BiData fontSize="1.5em" color="rgb(236, 59, 59)" />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    subNav: [
      {
        title: "Hiệu quả hoạt động",
        path: "/chart",
      },
    ],
    open: true,
  },
];
