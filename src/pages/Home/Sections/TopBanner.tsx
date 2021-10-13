import React from "react";
import logo from "./../../../assets//images/logo-banner.png";

const TopBanner: React.FunctionComponent = () => {
  return (
    <header id="first">
      <div className="container">
        <div className="header-content">
          <div className="inner">
            <div className="logo-image">
              <img src={logo} alt="" />
            </div>
            <h4>Take Back Control of the Music Industry</h4>
            <p>Your favorite artists songs stored in your wallet and hosted on the blockchain.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBanner;
