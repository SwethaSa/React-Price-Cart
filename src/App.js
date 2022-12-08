import React from "react";
import "./App.css";
import Card from "./Card.js";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((value, index) => {
              return (
                <div className="col-lg-4" key={index}>
                  <Card
                    plan={value.plan}
                    price={value.price}
                    month={value.month}
                    text={value.text}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
