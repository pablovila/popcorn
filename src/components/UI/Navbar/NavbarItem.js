import React from "react";
import PropTypes from "prop-types";

const navbarItem = props => {
  const { children, isLink, ...itemProps } = props;
  return (
    <>
      {isLink && (
        <a className="navbar-item" {...itemProps}>
          {children}
        </a>
      )}
      {!isLink && (
        <div className="navbar-item" {...itemProps}>
          {children}
        </div>
      )}
    </>
  );
};

navbarItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired
};

export default navbarItem;
