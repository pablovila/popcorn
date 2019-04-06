import React from "react";
import PropTypes from "prop-types";

const navbarBrand = ({ children }) => {
  return <div className="navbar-brand">{children}</div>;
};

navbarBrand.propTypes = {
  children: PropTypes.element
};

export default navbarBrand;
