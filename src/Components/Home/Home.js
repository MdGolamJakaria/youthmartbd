import React, { useState } from "react";
import "../Home/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dashboard from "../../fackData/dashboardData";

const Home = () => {
  const [dashBoardData, setDashBoardData] = useState(dashboard);

  //console.log(dashBoardData);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h4>Dashboard</h4>
          </div>
        </div>
        <div className="row">{}</div>
      </div>
    </div>
  );
};

export default Home;
