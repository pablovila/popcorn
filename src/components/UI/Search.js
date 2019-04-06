import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const search = () => {
  return (
    <div className="field has-addons">
      <div className="control has-icons-left">
        <input className="input" type="text" placeholder="Find a movie" />
        <span className="icon is-left">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <div className="control">
        <button className="button is-info">Search</button>
      </div>
    </div>
  );
};

export default search;
