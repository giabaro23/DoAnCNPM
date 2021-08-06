import React from "react";
import { useSelector } from "react-redux";
import "./AdminProfile.css";
import userAPI from "../../../API/userAPI";
import { message } from "antd";
import { Input } from "antd";

function AdminProfile() {
  const userInfo = useSelector((state) => state.infoUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      const res = await userAPI.updatePassword(Object.fromEntries(data));
      console.log(res);
      message.success("Update password success");
    } catch (error) {
      message.warning("Update password failure");
    }
  };

  return (
    <div className="aprofile">
      <div className="aprofile__container">
        <div className="aprofile__header">
          <p className="aprofile__header-1">Hồ sơ của bạn</p>
          <p className="aprofile__header-2">
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </p>
        </div>
        <div className="aprofile__box">
          <div className="aprofile__form">
            <div className="aprofile__firstname aprofile__line">
              <div className="aprofile__label">
                <label>Họ</label>
              </div>
              <div className="aprofile__data ">
                <Input value={userInfo.firstName} />
              </div>
            </div>
            <div className="aprofile__lastname aprofile__line">
              <div className="aprofile__label">
                <label>Tên</label>
              </div>
              <div className="aprofile__data">
                <Input value={userInfo.lastName} />
              </div>
            </div>
            <div className="aprofile__email aprofile__line">
              <div className="aprofile__label">
                <label>Email</label>
              </div>
              <div className="aprofile__data">
                <p>{userInfo.email}</p>
              </div>
            </div>
            <div className="aprofile__phone aprofile__line">
              <div className="aprofile__label">
                <label>Số điện thoại</label>
              </div>
              <div className="aprofile__data">
                <div className="aprofile__data-num">
                  {userInfo.phoneNum === null ? "khong co" : userInfo.phoneNum}
                </div>
              </div>
            </div>  
            <div className="aprofile__gender aprofile__line">
              <div className="aprofile__label">
                <label>Giới tính</label>
              </div>
              <div className="aprofile__data">
                <p>{userInfo.gender}</p>
              </div>
            </div>
            <div className="aprofile__address aprofile__line">
              <div className="aprofile__label">
                <label>Địa chỉ</label>
              </div>
              <div className="aprofile__data">
                <p>{userInfo.address}</p>
              </div>
            </div>
            <div className="aprofile__btn">
              <button>Lưu</button>
            </div>
          </div>
          <div className="aprofile__photo">
            <img src={userInfo.url} alt="" width="200px" height="200px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
