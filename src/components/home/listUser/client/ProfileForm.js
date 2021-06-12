import React from "react";
import "./ProfileForm.css";

function ProfileForm() {
  return (
    <div className="profile__container">
      <div className="profile__title">
        <strong>Hồ sơ của tôi</strong>
      </div>
      <div className="profile__info">
        <div className="profile__form">
          <div className="profile__tag">
            <p className="profile__tag-title">Tên đăng nhập</p>
            <p className="profile__tag-content">abcxyz</p>
          </div>
          <div className="profile__tag">
            <p className="profile__tag-title">Tên</p>
            <p className="profile__tag-content">Gia Bảo</p>
          </div>
          <div className="profile__tag">
            <p className="profile__tag-title">Email</p>
            <p className="profile__tag-content">1233242@gmail.com</p>
          </div>
          <div className="profile__tag">
            <p className="profile__tag-title">Giới tính</p>
            <p className="profile__tag-content">Nam</p>
          </div>
          <div className="profile__tag">
            <p className="profile__tag-title">Ngày sinh</p>
            <p className="profile__tag-content">23/03/1999</p>
          </div>
        </div>
        <div className="profile__img">
          <img
            src="https://demo.flatlogic.com/sing-app-react/static/media/19.jpg"
            alt=""
            width="200"
            height="200"
          />
        </div>
  
      </div>
    </div>
  );
}

export default ProfileForm;
