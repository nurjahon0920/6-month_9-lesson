import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <a href="#">Home</a>
          <a href="#" style={{ marginRight: "11px" }}>
            Business
          </a>
          <a href="#" className="mr2">
            Entertainment
          </a>
          <a href="#" className="mr2">
            General
          </a>
          <a href="#" className="mr2">
            Health
          </a>
          <a href="#" className="mr2">
            Science
          </a>
          <a href="#" style={{ marginRight: "7px" }}>
            Sports
          </a>
          <a href="#">Technology</a>
        </div>
      </header>
    </>
  );
};

export default Header;
