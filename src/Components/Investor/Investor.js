import React from "react";
import "../Investor/Investor.css";

const Investor = (props) => {
  return (
    <div>
      <div className="col-4">
        <div className="investor-box">
          <img src={props.investorInfo.image} alt="Investor Image" />
          <h5>{props.investorInfo.name}</h5>
          <h6>{props.investorInfo.designetion}</h6>
          <h6>Email: {props.investorInfo.email}</h6>
          <h6>Number: {props.investorInfo.phone}</h6>
          <h6>Invest Amount: {props.investorInfo.investAmount}</h6>
          <h6>Invest Date :{props.investorInfo.investDate}</h6>
          <button className="btn btn-primary">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Investor;
