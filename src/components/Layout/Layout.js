import React, { Fragment } from "react";
import PropTypes from "prop-types";

const layout = ({ children }) => {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  );
};

layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default layout;
