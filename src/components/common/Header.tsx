/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import DarkMode from "./../../hooks/context/DarkModeContext";
import Switch from "react-switch";
import { ReactComponent as MoonIcon } from "./../../assets/images/moon.svg";
import { ReactComponent as SunIcon } from "./../../assets/images/sun.svg";
interface Props {
  onDarkModeChange: () => void;
  checked: boolean;
}
const Header: React.FunctionComponent<Props> = ({ onDarkModeChange, checked }) => {
  const darkMode = React.useContext(DarkMode);
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-custom navbar-fixed-top ${darkMode ? "text-white" : ""} ${
        toggle ? "open" : ""
      } ${scroll ? "bg-custom" : ""}`}
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
          <Switch
            onChange={onDarkModeChange}
            checked={checked}
            className="align-middle me-4 "
            checkedIcon={<MoonIcon width="22" />}
            uncheckedIcon={<SunIcon />}
            offColor="#636363"
            onColor="#636363"
          />
        </div>
        <div className="right-content">
          <button className="btn btn-info btn-primary-custom">Connect Wallet</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
