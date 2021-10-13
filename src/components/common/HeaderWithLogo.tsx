/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import NavBar from "./NavBar";
const HeaderWithLogo: React.FunctionComponent = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    setScroll(window.scrollY > 50);
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-custom-with-logo navbar-fixed-top ${toggle ? "open" : ""} ${
        scroll ? "bg-custom" : ""
      }`}
    >
      <div className="container">
        <Link className="navbar-brand order-lg-1 order-2" to="/">
          <img src={logo} alt="" className="logo-img" />
        </Link>
        <button
          className="navbar-toggler collapsed order-1"
          type="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          onClick={() => setToggle(!toggle)}
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </button>
        <div className={`navbar-collapse order-lg-2 order-4 collapse ${toggle ? "show" : "closed"}`} id="navbarText">
          <NavBar />
        </div>
        <div className="right-content order-lg-3 order-3">
          <button className="btn btn-info btn-primary-custom">Connect Wallet</button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderWithLogo;
