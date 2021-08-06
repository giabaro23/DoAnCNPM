import React from "react";
import { Link } from "react-router-dom";
import "./ChartForm.css";

function ChartForm({ title, number, path }) {
  return (
    <div className="chart">
      <div className="chart__title">
        <p>{title}</p>
      </div>
      <p className="chart__num">{number}</p>
      {/* <button className="chart__btn">
        <Link to={path} className="chart__btn-link">
          Xem chi tiết
        </Link>
      </button> */}
    </div>
  );
}

export default ChartForm;
