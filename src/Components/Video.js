import React from "react";
import YouTube from "react-youtube";

function Video() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="page">
            <h1>The best song ever - Enjoy</h1>
            <YouTube videoId="JuYeHPFR3f0" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Video;
