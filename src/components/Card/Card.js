import React from "react";
import "./style.css";
const Card = ({ data }) => {
  return (
    <div className="card">
      <div>
        <p className="label">
          <span>EMP ID</span>
          <span>:</span>
        </p>
        <p>{data.id}</p>
      </div>

      <div>
        <p className="label">
          <span>Name</span>
          <span>:</span>
        </p>
        <p>{data.name}</p>
      </div>
      <div>
        <p className="label">
          <span>DOB</span>
          <span>:</span>
        </p>
        <p style={{ color: "#B77420" }}>{data.dob}</p>
      </div>
      <div>
        <p className="label">
          <span>Role</span>
          <span>:</span>
        </p>
        <p style={{ color: "#36A546" }}>{data.role}</p>
      </div>
    </div>
  );
};

export default Card;
