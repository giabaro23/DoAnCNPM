import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const MenuData = [
  {
    title: "Thông tin của bạn",
    icon: <FaIcons.FaEnvelopeOpenText />,
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
    icon: <AiIcons.AiFillHome />,
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
    icon: <AiIcons.AiFillHome />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    subNav: [
      {
        title: "Tất cả sản phẩm",
        path: "/product",
      },
      {
        title: "Sản phẩm vi phạm",
        path: "/bc",
      },
    ],
    open: true,
  },
  {
    title: "Dữ liệu",
    icon: <AiIcons.AiFillHome />,
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
