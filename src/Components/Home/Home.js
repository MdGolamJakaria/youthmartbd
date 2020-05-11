import React, { useState } from "react";
import "../Home/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dashboard from "../../fackData/dashboardData";
import DashData from "../DashData/DashData";

const Home = () => {
  const [dashBoardData, setDashBoardData] = useState(dashboard);

  //console.log(dashBoardData);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6 my-2">
            <h4>DASHBOARD:</h4>
          </div>
        </div>

        <div className="row">
          {dashBoardData.map((info) => (
            <DashData data={info}></DashData>
          ))}
        </div>
        <div className="row">
          <div className="col-6">
            <h4>DUES:</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>Developer is working for this section.</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4>LATEST PRODUCTS:</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>Developer is working for this section.</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
