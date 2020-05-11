import React, { useState } from "react";
import FoundersInfo from "../../fackData/foundersData";
import Founder from "../Founder/Founder";
const Founders = () => {
  const [founders, setFounders] = useState(FoundersInfo);
  console.log(founders);
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Founders:</h2>
        </div>
        <div className="row">
          {founders.map((fd) => (
            <Founder key={fd.id} founder={fd}></Founder>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founders;
