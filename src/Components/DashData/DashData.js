import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashData.css";

const DashData = (props) => {
  //console.log(props.data.name);
  return (
    <div className="col-3 box">
      <div className="data">
        <br/>
        <h1>{props.data.amount}</h1>
        <h6>{props.data.name}</h6>
        <br/>
      </div>
    </div>
  );
};

export default DashData;
