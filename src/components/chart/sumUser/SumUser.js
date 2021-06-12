import React, { useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getSumUser } from "../../../action/sumUserAction";
import sumUserAPI from "../../../API/sumUserAPI";
import ChartForm from "../ChartForm";
import "./SumUser.css";

function SumUser() {
  const sum = useSelector((state) => state.sumUser);
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
  return (
    <div className="statistic__container">
      <div className="statistic">
        <ChartForm
          title="Số tài khoản hiện có trên web"
          path="/client"
          number={sum.sumUser}
        />
        <ChartForm
          title="Tổng số đơn hàng hôm nay"
          path="/profile"
          number="250"
        />
        <ChartForm title="Lượt ghé thăm hôm nay" path="/seller" number="200" />
        <ChartForm title="Lượt ghé thăm hôm nay" path="/seller" number="200" />
      </div>

      <div>
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
      </div>
      <div>
        <Line
          const
          data={{
            labels: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
            ],
            datasets: [
              {
                label: "Sale for 2021",
                data: [3, 2, 1, 5, 7, 14, 5, 8, 0, 12, 34, 5, 15],
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
  );
}

export default SumUser;
