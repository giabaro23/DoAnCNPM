import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getListUser } from "../../../../action/userAction";
import { Link } from "react-router-dom";
import userAPI from "../../../../API/userAPI";
import "../../../product/table.css";
import "./ListClient.css";
import { Popconfirm, message } from "antd";
import * as GrIcons from "react-icons/gr";

// import PlaceholderLoading from "react-placeholder-loading";

function ListClient() {
  const listUser = useSelector((state) => state.listUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchListUser = async () => {
      try {
        const response = await userAPI.getListUser("Người mua");
        console.log(response);
        dispatch(getListUser(response.users));
      } catch (error) {
        console.log(error);
      }
    };
    fetchListUser();
  }, [dispatch]);

  // const handleDeleteUser = async (id) => {
  //   try {
  //     const res = await userAPI.deleteUser(id);
  //     console.log(res);
  //     dispatch(deleteUser(id));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleDeleteUser = async (id) => {
    try {
      const res = await userAPI.deleteUser(id);
      console.log(res);
      dispatch(deleteUser(id));
      message.success("Xóa thành công!");
    } catch (error) {
      console.log(error);
    }
  };

  function cancel(e) {
    console.log(e);
  }

  return (
    <div className="client">
      {listUser.users.length === 0 ? (
        // <div>loading...</div>
        <img
          className="client__loading"
          src="https://i0.wp.com/thumbs.gfycat.com/CompleteZanyIlsamochadegu-small.gif"
          alt=""
        />
      ) : (
        // <PlaceholderLoading shape="circle" width={60} height={60} />
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Họ và tên</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th>Chức năng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listUser.users.map((user) => {
              return (
                <tr key={user.id}>
                  <th>
                    <img
                      src={
                        user.photo_url === null
                          ? user.photo_url
                          : // : user.photo_url
                            "https://i2.wp.com/in03.hostcontrol.com/resources/0bc96a6dd6bb4a/472cec2299.JPEG"
                      }
                      alt=""
                      width="40"
                      height="40"
                    />
                  </th>
                  <th>{user.full_name}</th>
                  <th>{user.email}</th>
                  <th>{user.address}</th>
                  <th>{user.role}</th>
                  <th>
                    {/* <Link to={`/profile/${user.id}`}>
                      <button className="table__btn">Xem</button>
                    </Link> */}
                    <Link to={`/profile/${user.id}`}>
                      <button className="table__btn1">
                        {/* <GrIcons.GrView /> */}
                        Xem
                      </button>
                    </Link>
                    <Popconfirm
                      title="Bạn có chắc chắn muốn xóa người dùng này?"
                      onConfirm={() => handleDeleteUser(user.id)}
                      onCancel={cancel}
                      okText="Có"
                      cancelText="Không"
                    >
                      <button className="table__btn2">Xóa</button>
                    </Popconfirm>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListClient;
