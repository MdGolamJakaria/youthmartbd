import React from "react";
import "./Founder.css";

const Founder = (props) => {
  const founderMoreInfoHendeler = () => {
    alert("You have clicked but i won't help you.");
  };
  return (
    <div className="col-12 col-sm-4">
      <div className="founder-box">
        <img src={props.founder.image} alt="" />
        <h3>{props.founder.name}</h3>
        <h5>
          {props.founder.designetion},{props.founder.altranetiveDesignetion}
        </h5>
        <h6>Email: {props.founder.email}</h6>
        <h6>Phone: {props.founder.phone}</h6>
        <button onClick={founderMoreInfoHendeler} className="btn btn-primary">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Founder;
