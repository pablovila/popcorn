import React from "react";
import PropTypes from "prop-types";
import { Link } from "server/routes";

const breadcrumb = ({ levels }) => {
  const numLevels = levels.length;
  return (
    <>
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          {levels.map((level, i) => (
            <li key={i} className={i + 1 === numLevels ? "is-active" : ""}>
              <Link route={level.route} params={level.params}>
                <a href={level.href}>{level.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

breadcrumb.propTypes = {
  levels: PropTypes.array.isRequired
};

export default breadcrumb;
