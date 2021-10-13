import React, { useState } from "react";
import imageOne from "./../../assets/images/active-music.png";
import MusicOne from "./../../assets/images/music-1.png";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const StreamTracks = () => {
  const [isActive, setToggleMusicList] = useState(false);
  const SAMPLE_MP3_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  return (
    <section className="main-content">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-lg-5 order-lg-1 order-2">
              <div className="info pt-0 p-4">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <button
                      className={`py-2 accordion-button ${isActive ? "" : "collapsed"}`}
                      type="button"
                      onClick={() => setToggleMusicList(!isActive)}
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <b>Owned Songs</b>
                    </button>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className={`accordion-collapse collapse ${isActive ? "show" : ""}`}
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        <ol className="list-group">
                          {[...Array(10)].map((item, key) => (
                            <li className="list-group-item d-flex p-0 mb-2" key={key}>
                              <img src={MusicOne} alt="" width="50" height="50" />
                              <div className="ms-2 me-auto">
                                <p className="fw-bold mb-0">Thinking Out Loud</p>
                                <small className="time-duration">01:59</small>
                              </div>
                              <span className="icon">
                                {key === 1 ? (
                                  <i className="fa fa-pause text-info" aria-hidden="true" />
                                ) : (
                                  <i className="fa fa-play" aria-hidden="true" />
                                )}
                              </span>
                            </li>
                          ))}

                          <li className="list-group-item d-flex p-0 mb-2">
                            <img src={MusicOne} alt="" width="50" height="50" />
                            <div className="ms-2 me-auto">
                              <p className="fw-bold mb-0">Thinking Out Loud</p>
                              <small className="time-duration">01:59</small>
                            </div>
                            <span className="icon">
                              <i className="fa fa-play" aria-hidden="true" />
                            </span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7  order-lg-2 order-1 p-relative image-sec">
              <h6>
                <b>See You Again</b>
              </h6>
              <img src={imageOne} alt="" className="stream-track-active w-100 mb-3" />
              <AudioPlayer
                className="active-audio-player"
                src={SAMPLE_MP3_URL}
                showSkipControls={true} 
                showJumpControls={false} 
                customIcons={{
                    play:  <div className="play-pause-icon"><i className="fa fa-play"></i></div>,
                    pause:  <div className="play-pause-icon"><i className="fa fa-pause"></i></div>
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamTracks;
