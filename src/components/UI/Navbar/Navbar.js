import React from "react";
import PropTypes from "prop-types";

const navbar = ({ children }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">{children}</div>
    </nav>
  );
};

navbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default navbar;
