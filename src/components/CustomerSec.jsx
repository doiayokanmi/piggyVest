import React from "react";

const CustomerSec = () => {
  let appLogo = "/src/image/download-apple.svg";
  let playLogo = "/src/image/download-google.svg";
  return (
    <>
      <section id="customerCon">
        <div id="customerComment"></div>

        <div id="customerText" className="py-5 mt-5">
          <h1 className="mb-2 animate__animated animate__fadeInUp">
            4 Million + customers
          </h1>

          <p className="mb-5">
            Since launching in 2016, over 4,000,000 people have used PiggyVest
            to manage their money better, avoid over-spending and be more
            accountable.
          </p>

          <a href="" id="signUp">
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
      </section>
    </>
  );
};

export default CustomerSec;
