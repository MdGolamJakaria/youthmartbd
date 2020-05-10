import React from "react";
import "../Home/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dashboard from "../../fackData/dashboardData";

const Home = () => {
  console.log(dashboard);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h4>Dashboard</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="dash-card d-flex align-items-center justify-content-center">
              <div className="dash-card-info">
                <span>00.00</span>
                <p>Cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
