import React from "react";
import DarkMode from "../../hooks/context/DarkModeContext";
import imageOne from "./../../assets/images/detail.png";

const Detail: React.FunctionComponent = () => {
  const darkMode = React.useContext(DarkMode);

  return (
    <section className={`main-content ${darkMode ? 'text-white' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-lg-7 order-lg-1 order-2">
              <div className="info pt-0 p-4">
                <h2 className="mt-0">Music Name Here</h2>
                <p>
                  Created by : <b>Aluan Wang</b>
                </p>
                <span className="price">
                  Price : <b>0.159Ξ</b>
                </span>
                <p className="mb-0">
                  <b>Description: </b>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <p>
                  License : <b>CC</b>
                </p>
                <p>
                  Total Minted : <b>#1 of 1024 max</b>
                </p>
                <button className="btn btn-info btn-primary-custom">Mint the Song</button>
              </div>
            </div>
            <div className="col-lg-5  order-lg-2 order-1 p-relative image-sec text-center">
              <img src={imageOne} alt="" className="home-about-img w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
