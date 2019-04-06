import React from "react";
import PropTypes from "prop-types";

const box = ({ children }) => {
  return <div className="box">{children}</div>;
};

box.propTypes = {
  children: PropTypes.element.isRequired
};

export default box;
