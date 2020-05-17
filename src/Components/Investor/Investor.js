import React from "react";
import "../Investor/Investor.css";
import { useState } from "react";

const Investor = (props) => {
  const [investor, setInvestor] = useState(props.investorInfo);
  const [moreInfoClicked, setMoreInfoClicked] = useState({
    morebtnClicked: false,
  });
  const investorMoreInfoHendeler = () => {
    setMoreInfoClicked({ morebtnClicked: true });
  };
  const investorlessInfoHendeler = () => {
    setMoreInfoClicked({ morebtnClicked: false });
  };
  const investorInfo = moreInfoClicked.morebtnClicked ? (
    <div>
      <img src={investor.image} alt="" />
      <h5>{investor.name}</h5>
      <h6>
        {investor.designetion}, {investor.altranetiveDesignetion}
      </h6>
      <p>Bio : {investor.bio}</p>
      <h6>Email: {investor.email}</h6>
      <h6>Number: {investor.phone}</h6>
      <h6>Invest Amount: {investor.investAmount}</h6>
      <h6>Invest Date :{investor.investDate}</h6>
      <h6> Profit Percentage : {investor.profitpercentage}</h6>
      <h6>Nid Number : {investor.nidNumber}</h6>
      <h5>Personal Info:</h5>
      <h6>Father Name : {investor.fatherName}</h6>
      <h6>Mother Name : {investor.motherName}</h6>
      <h6>Marital Status : {investor.maritalStatus}</h6>
      <h6>Wife Name : {investor.wifeName}</h6>
      <h6>Home Number : {investor.homeNumber}</h6>
      <h6>Present Address:</h6>
      <p>{investor.presentAddress}</p>
      <h6>Permanent Address:</h6>
      <p>{investor.permanentAddress}</p>
      <h6>Nomine Info :</h6>
      <img className="nomine-image" src={investor.nomineImage} alt="" />
      <h6>Nomine Name: {investor.nomineName}</h6>
      <p>Nomine Relation: {investor.nomineRelation}</p>
      <p>Nomine Phone : {investor.nominePhone}</p>
      <button onClick={investorlessInfoHendeler} className="btn btn-primary">
        less Info
      </button>
    </div>
  ) : (
    <div>
      <img src={investor.image} alt="" />
      <h5>{investor.name}</h5>
      <h6>
        {investor.designetion}, {investor.altranetiveDesignetion}
      </h6>
      <h6>Email: {investor.email}</h6>
      <h6>Number: {investor.phone}</h6>
      <h6>Invest Amount: {investor.investAmount}</h6>
      <button onClick={investorMoreInfoHendeler} className="btn btn-primary">
        More Info
      </button>
    </div>
  );
  return (
    <div>
      <div className="col-12 col-sm-4">
        <div className="investor-box">{investorInfo}</div>
      </div>
    </div>
  );
};

export default Investor;
