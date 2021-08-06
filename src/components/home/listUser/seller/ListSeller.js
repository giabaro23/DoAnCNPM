import "./ListSeller.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getListUser } from "../../../../action/userAction";
import userAPI from "../../../../API/userAPI";
import { Link } from "react-router-dom";
import "../../../product/table.css";
import { message, Popconfirm } from "antd";
function ListSeller() {
  const listUser = useSelector((state) => state.listUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchListUser = async () => {
      try {
        const response = await userAPI.getListUser("Người bán");
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
    <div className="seller">
      {listUser.users.length === 0 ? (
        <img
          className="seller__loading"
          src="https://i0.wp.com/thumbs.gfycat.com/CompleteZanyIlsamochadegu-small.gif"
          alt=""
        />
      ) : (
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
                    <img src={user.photo_url} alt="" width="40" height="40" />
                  </th>
                  <th>{user.full_name}</th>
                  <th>{user.email}</th>
                  <th>{user.address}</th>
                  <th>{user.role}</th>
                  <th>
                    <Link to={`/profile/${user.id}`}>
                      <button className="table__btn1">Xem</button>
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

export default ListSeller;
