import React from "react";
import "./Founder.css";
import { useState } from "react";

const Founder = (props) => {
  const [founderInfo, setFounderInfo] = useState(props.founder);
  const [state, setState] = useState({
    moreInfoClicked: false,
  });
  const founderShortInfoHendeler = () => {
    setState({ moreInfoClicked: false });
  };
  const founderMoreInfoHendeler = () => {
    setState({ moreInfoClicked: true });
  };
  const founderMoreInfo = state.moreInfoClicked ? (
    <div>
      <img src={founderInfo.image} alt="" />
      <h4>{founderInfo.name}</h4>
      <h5>
        {founderInfo.designetion},{founderInfo.altranetiveDesignetion}
      </h5>
      <h6>
        <strong>Bio:</strong> {founderInfo.bio}{" "}
      </h6>
      <h6>
        <strong>Email:</strong> {founderInfo.email}
      </h6>
      <h6>
        <strong>Phone:</strong> {founderInfo.phone}
      </h6>
      <h6>
        <strong>Nid Number :</strong> {founderInfo.nidNumber}
      </h6>
      <p>
        <strong>Present Address:</strong> {founderInfo.presentAddress}
      </p>
      <p>
        <strong>Permanent Address:</strong> {founderInfo.permanentAddress}
      </p>
      <h6>
        <strong>Father Name :</strong> {founderInfo.fatherName}
      </h6>
      <h6>
        <strong>Mother Name :</strong> {founderInfo.motherName}
      </h6>
      <h6>
        <strong>Marital Status :</strong> {founderInfo.maritalStatus}
      </h6>
      <h6>
        <strong>Home Number :</strong> {founderInfo.homeNum}
      </h6>
      <p>Nomine Image:</p>
      <img className="nomine-image" src={founderInfo.nomineImage} alt="" />
      <h5> Nomine Name : {founderInfo.nomineName}</h5>
      <h6> Nomine Relation : {founderInfo.nomineRelation}</h6>
      <h6> Nomine Phone : {founderInfo.nominePhone}</h6>
      <button onClick={founderShortInfoHendeler} className="btn btn-primary">
        Short Info
      </button>
    </div>
  ) : (
    <div>
      <img src={founderInfo.image} alt="" />
      <h4>{founderInfo.name}</h4>
      <h5>
        {founderInfo.designetion},{founderInfo.altranetiveDesignetion}
      </h5>
      <h6>Email: {founderInfo.email}</h6>
      <h6>Phone: {founderInfo.phone}</h6>
      <button onClick={founderMoreInfoHendeler} className="btn btn-primary">
        More Info
      </button>
    </div>
  );

  return (
    <div className="col-12 col-sm-4">
      <div className="founder-box">{founderMoreInfo}</div>
    </div>
  );
};

export default Founder;
