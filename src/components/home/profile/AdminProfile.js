import React from "react";
import { useSelector } from "react-redux";
import "./AdminProfile.css";

function AdminProfile() {
  const userInfo = useSelector((state) => state.infoUser);

  return (
    <div className="wrap">
      <div className="profile">
        <div className="profile__title">
          <h1>Thông tin của bạn</h1>
        </div>
        <div className="profile__form">
          <div className="profile__item">
            <p>Họ</p>
            <input type="text" value={userInfo.firstName} />
          </div>
          <div className="profile__item">
            <p>Tên</p>
            <input type="text" value={userInfo.lastName} />
          </div>
          <div className="profile__item">
            <p>Email</p>
            <input type="text" value={userInfo.email} disabled="true" />
          </div>
          <div className="profile__item">
            <p>Mật khẩu hiện tại</p>
            <input type="password" placeholder="Mật khẩu" />
          </div>
          <div className="profile__item">
            <p>Mật khẩu mới</p>
            <input type="password" placeholder="Mật khẩu mới" />
          </div>
          <div className="profile__item">
            <p>Xác nhận mật khẩu</p>
            <input type="password" placeholder="Xác nhận mật khẩu" />
          </div>
          <div className="profile__item">
            <p>Ảnh đại diện</p>
            <button>Browser</button>
          </div>
          <img src={userInfo.url} alt="" />
        </div>
        <div className="profile__btn">
          <button>Lưu thay đổi</button>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
