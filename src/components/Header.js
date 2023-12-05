import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1>MERN Stack Example</h1>
      <h6>From: {props.zone}</h6>
    </div>
  );
};

export default Header;
