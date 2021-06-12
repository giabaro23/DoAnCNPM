import "./ListSeller.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../../../action/userAction";
import userAPI from "../../../../API/userAPI";
import "../../../product/table.css";
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
  }, []);

  return (
    <div className="seller">
      {listUser.users.length === 0 ? (
        <div className="seller">loading...</div>
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

export default ListSeller;
