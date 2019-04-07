import React from "react";

const hero = ({ children }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">{children}</div>
      </div>
    </section>
  );
};

export default hero;
