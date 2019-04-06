import React from "react";
import PropTypes from "prop-types";

const navbarItem = props => {
  const { children, ...aProps } = props;
  return (
    <div className="navbar-item" {...aProps}>
      {children}
    </div>
  );
};

navbarItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired
};

export default navbarItem;
