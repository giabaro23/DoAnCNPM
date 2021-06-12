import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAPI from "../../../../API/userAPI";
import "./ListClient.css";
import "../../../product/table.css";
import { getListUser } from "../../../../action/userAction";
import { Link } from "react-router-dom";
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
  }, []);
  console.log(listUser.users);
  return (
    <div className="client">
      {listUser.users.length === 0 ? (
        <div className="client">loading...</div>
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
                    {/* <Link to={`/profile/${user.id}`}>
                      <button className="table__btn">Xem</button>
                    </Link> */}
                    <button className="table__btn">Xóa</button>
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
