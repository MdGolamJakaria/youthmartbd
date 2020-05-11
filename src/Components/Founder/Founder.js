import React from "react";
import "./Founder.css";

const Founder = (props) => {
  return (
    <div className="col-4">
      <div className='founder-box'>
        <img src={props.founder.image} alt="" />
        <h3>{props.founder.name}</h3>
        <h5>
          {props.founder.designetion},{props.founder.altranetiveDesignetion}
        </h5>
        <h6>Email: {props.founder.email}</h6>
        <h6>Phone: {props.founder.phone}</h6>
        <button className="btn btn-primary">More Info</button>

      </div>
    </div>
  );
};

export default Founder;
