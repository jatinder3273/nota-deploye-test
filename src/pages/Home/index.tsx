import React from "react";
import TopBanner from "./Sections/TopBanner";
import imageOne from "./../../assets/images/image1.png";
import { ReactComponent as NextArrow } from "./../../assets/images/next-arrow.svg";
import { Link } from "react-router-dom";
import DarkMode from "../../hooks/context/DarkModeContext";
const Home: React.FunctionComponent = () => {
  const darkMode = React.useContext(DarkMode);

  return (
    <>
      <TopBanner />
      <section className={`about-section`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-relative image-sec">
              <img src={imageOne} alt=""  className="home-about-img"/>
            </div>
            <div className="col-lg-6">
              <div className="info p-4">
                <span className="price px-3 py-2">
                  Price : <b>0.159Ξ</b>
                </span>
                <h2 className="mt-3">Music Name Here</h2>
                <p>
                  Created by : <b>Aluan Wang</b>
                </p>
                <p className="mb-0">
                  <b>Description: </b>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. Contrary to popular belief, Lorem Ipsum is not simply random text...
                </p>
                <p>
                  Total Minted : <b>#1024 of 1024 max</b>
                </p>
                <div className="nextbutton"><Link to="/detail/ds454-456345sdfgg-345f"><NextArrow /></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
