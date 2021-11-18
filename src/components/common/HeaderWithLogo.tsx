/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import NavBar from "./NavBar";
import Switch from "react-switch";
import { ReactComponent as MoonIcon } from "./../../assets/images/moon.svg";
import { ReactComponent as SunIcon } from "./../../assets/images/sun.svg";
import DarkMode from "../../hooks/context/DarkModeContext";
interface Props {
  onDarkModeChange: () => void;
  handleOnConnect: () => void;
  handleDisconnectWallet: () => void;
  checked: boolean;
  walletIsConnected: boolean;
  balance: number;
}
const HeaderWithLogo: React.FunctionComponent<Props> = ({
  onDarkModeChange,
  handleOnConnect,
  handleDisconnectWallet,
  checked,
  walletIsConnected,
  balance
}) => {
  const darkMode = React.useContext(DarkMode);
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
    setScroll(window.scrollY > 0);
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
        <div
          className={`navbar-collapse order-lg-2 order-4 collapse ${toggle ? "show" : "closed"}  ${
            darkMode ? "header-inner-dark-mode" : ""
          }`}
          id="navbarText"
        >
          <NavBar />
          <Switch
            onChange={onDarkModeChange}
            checked={checked}
            className="align-middle me-4 d-lg-none"
            checkedIcon={<MoonIcon width="22" />}
            uncheckedIcon={<SunIcon />}
            offColor="#636363"
            onColor="#636363"
          />
        </div>
        <div className="d-flex align-items-center right-content order-lg-3 order-3">
          <Switch
            onChange={onDarkModeChange}
            checked={checked}
            className="align-middle me-4 d-none d-sm-block"
            checkedIcon={<MoonIcon width="22" />}
            uncheckedIcon={<SunIcon />}
            offColor="#636363"
            onColor="#636363"
          />
          {walletIsConnected ? (
            <button onClick={handleDisconnectWallet} className="btn btn-info btn-primary-custom">
              Disconnect
            </button>
          ) : (
            <button onClick={handleOnConnect} className="btn btn-info btn-primary-custom">
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderWithLogo;
