import React, { useState } from "react";
import investorsData from "../../fackData/investorsData";
import Investor from "../Investor/Investor";
const Investors = () => {
  //console.log(investorsData);
  const [investors, setInvestors] = useState(investorsData);
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Investors:</h1>
        </div>
        <div className="row">
          {investors.map((investor) => (
            <Investor key={investor.id} investorInfo={investor}></Investor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investors;
