import React, { useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getSumOrder } from "../../../action/sumOrderAction";
import { getSumUser } from "../../../action/sumUserAction";
import { getUserVisit } from "../../../action/userAction";
import sumOrderAPI from "../../../API/sumOrderAPI";
import sumUserAPI from "../../../API/sumUserAPI";
import userAPI from "../../../API/userAPI";
import ChartForm from "../ChartForm";
import "./SumUser.css";

function SumUser() {
  const user = useSelector((state) => state.sumUser);

  const dispatch = useDispatch();
  useEffect(() => {
    const getSumUsers = async () => {
      try {
        const response = await sumUserAPI.getSumUserAPI();
        dispatch(getSumUser(response));
      } catch (error) {
        console.log(error);
      }
    };
    getSumUsers();
  }, [dispatch]);

  const order = useSelector((state) => state.sumOrder);
  const dispatch2 = useDispatch();
  useEffect(() => {
    const getSumOrders = async () => {
      try {
        const response = await sumOrderAPI.getSumOrderAPI();
        dispatch2(getSumOrder(response));
      } catch (error) {
        console.log(error);
      }
    };
    getSumOrders();
  }, [dispatch2]);

  const visit = useSelector((state) => state.userVisit);
  const dispatch3 = useDispatch();
  useEffect(() => {
    const getUserVisits = async () => {
      const response = await userAPI.getUserVisit();
      dispatch3(getUserVisit(response));
    };
    getUserVisits();
  }, [dispatch3]);
  return (
    <div className="wrap">
      <div className="statistic__container">
        <div className="statistic">
          <ChartForm
            title="Số tài khoản hiện có trên web"
            path="/client"
            number={user.sumUser}
          />
          <ChartForm
            title="Tổng số đơn hàng trong năm nay"
            path="/profile"
            number={order.sumOrder}
          />
          <ChartForm
            title="Lượt ghé thăm hôm nay"
            path="/seller"
            number={visit.userVisit}
          />
        </div>

        {/* <div>
      <Bar
        data={{
          labels: ["red", "blue", "white", "green"],
          datasets: [
            {
              label: "abc",
              data: [20, 23, 19, 11],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div> */}
        <div>
          <Line
            const
            data={{
              labels: [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12",
              ],
              datasets: [
                {
                  label: "Số đơn order theo tháng",
                  data: [3, 2, 1, 5, 7, 14, 5, 8, 0, 12, 34, 5],
                  fill: false,
                  borderColor: "rgb(75,192,192)",
                  tension: 0.1,
                },
              ],
            }}
            height={200}
            width={600}
          />
        </div>
      </div>
    </div>
  );
}

export default SumUser;
