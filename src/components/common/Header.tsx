/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const Header: React.FunctionComponent = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-custom navbar-fixed-top ${toggle ? "open" : ""} ${scroll ? "bg-custom" : ""}`}
    >
      <div className="container">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          onClick={() => setToggle(!toggle)}
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </button>
        <div className={`navbar-collapse collapse ${toggle ? "show" : "closed"}`} id="navbarText">
          <NavBar />
        </div>
        <div className="right-content">
          <button className="btn btn-info btn-primary-custom">Connect Wallet</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
