import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedUser } from "../../../../action/userAction";
import userAPI from "../../../../API/userAPI";
import "./ProfileForm.css";

function ProfileForm() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { userId } = useParams();
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await userAPI.getUserDetail(userId);
        dispatch(selectedUser(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserDetail();
  }, []);

  return (
    <div className="wrap">
      <div className="profile__container">
        <div className="profile__title">
          <strong>Hồ sơ của tôi</strong>
        </div>
        <div className="profile__info">
          <div className="profile__form">
            <div className="profile__tag">
              <p className="profile__tag-title">Tên đăng nhập</p>
              <p className="profile__tag-content">{user.username}</p>
            </div>
            <div className="profile__tag">
              <p className="profile__tag-title">Tên</p>
              <p className="profile__tag-content">{user.full_name}</p>
            </div>
            <div className="profile__tag">
              <p className="profile__tag-title">Email</p>
              <p className="profile__tag-content">{user.email}</p>
            </div>
            <div className="profile__tag">
              <p className="profile__tag-title">Giới tính</p>
              <p className="profile__tag-content">{user.gender}</p>
            </div>
            <div className="profile__tag">
              <p className="profile__tag-title">Ngày sinh</p>
              <p className="profile__tag-content">
                {user.date_of_birth === null ? user.date_of_birth : "Không rõ"}
              </p>
            </div>
          </div>
          <div className="profile__img">
            <img
              src={
                user.photo_url === null
                  ? user.photo_url
                  : "https://i2.wp.com/in03.hostcontrol.com/resources/0bc96a6dd6bb4a/472cec2299.JPEG"
              }
              alt=""
              width="200"
              height="200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
