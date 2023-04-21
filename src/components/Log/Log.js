import React from "react";
import { Link } from "react-router-dom";
import "./Log.css";
import VideoBook from "../../video/BookVideo.mp4";
const Log = () => {
  const w = window.innerWidth;

  return (
    <div className="container">
      <div className="container-log">
        <h1>
          Books <span className="color-title">Nook</span>
        </h1>
        <Link to={"/Home"}>
          <a class="btn-neon">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            Go to the shop
          </a>
        </Link>
      </div>
      {w < 750 ? null : (
        <>
          <video
            type="video/mp4"
            muted
            autoPlay="autoplay"
            loop="loop"
            src={VideoBook}
          ></video>
          <div className="capa"></div>{" "}
        </>
      )}
    </div>
  );
};

export default Log;
