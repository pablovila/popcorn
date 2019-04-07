import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const cart = () => {
  return (
    <>
      <button className="button is-info">
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </>
  );
};

export default cart;
