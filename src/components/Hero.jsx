import React from "react";
import "animate.css";

const Hero = () => {
  let appLogo = "/src/image/download-apple.svg";
  let playLogo = "/src/image/download-google.svg";
  return (
    <>
      <section id="heroSection">
        <div id="bg"></div>
        <div id="heroText">
          <h1 className="mb-3 animate__animated animate__fadeInUp">The Better Way to Save & Invest.</h1>

          <p className="mb-5">
            PiggyVest helps over 4 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>

          <a href="" id="signUp" className="mb-3">
            Create free Account
          </a>

          <div id="appDownload">
            <a href="" id="playStore">
              <img src={appLogo} alt="" />
              <span>Get on iPhone</span>
            </a>

            <a href="" id="appStore">
              <img src={playLogo} alt="" />
              <span>Get on Android</span>
            </a>
          </div>
        </div>

        <div id="heroImg">
          <img
            src="/src/image/header_Img_a2a9220bd6.png"
            alt=""
            className="ms-4 animate__animated animate__slideInRight img-fluid"
          />

          <img src="/src/image/card1_565f256c81.png" alt="" id="card1" />

          <img src="/src/image/card2_7a8c09a44c.png" alt="" id="card2" />

          <img src="/src/image/circle.svg" alt="" id="circle" />
          <img src="/src/image/angle.svg" alt="" id="blueDotted" />
          <img src="/src/image/blueDotted.svg" alt="" id="angleDotted" />
        </div>
      </section>
    </>
  );
};

export default Hero;
