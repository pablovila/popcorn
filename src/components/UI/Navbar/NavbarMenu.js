import React from "react";
import PropTypes from "prop-types";

const navbarMenu = ({ children }) => {
  return (
    <div className="navbar-menu">
      <div className="navbar-end">{children}</div>
    </div>
  );
};

navbarMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default navbarMenu;
