import React from "react";
import "./App.css";

export default function Card(data) {
  let { plan, price, month, text } = data;
  return (
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          {plan}
        </h5>
        <h6 className="card-price text-center">
          {price}
          <span className="period">{month}</span>
        </h6>
        <hr />

        <ul className="text">
          {text.map((value, index) => {
            return (
              <div id="main" key={index} className={value.display}>
                <span className="fa-li">
                  <i className={value.icon}></i>
                </span>
                <b>{value.advantages}</b>
              </div>
            );
          })}
        </ul>
        <div className="d-grid">
          <button className="btn btn-primary">BUTTON</button>
        </div>
      </div>
    </div>
  );
}
