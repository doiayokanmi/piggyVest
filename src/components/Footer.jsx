import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-5 py-5">
        <div id="footerLink">
        <div id="footerImg">
          <img
            src="/src/image/PiggyVest Logo (1).svg"
            alt=""
            className="img-fluid"
          />{" "}
          <br />
          <img
            src="/src/image/compliance Logo.png"
            alt=""
            className="img-fluid"
            id="compliance"
          />
        </div>

        <div>
          <h6>Product</h6>
          <a href="">Piggyvest</a>
          <a href="">Invest</a>
          <a href="">Safelock</a>
          <a href="">Target Savings</a>
          <a href="">Flex Naira</a>
        </div>

        <div>
          <h6>Company</h6>
          <a href="">About</a>
          <a href="">FAQs</a>
          <a href="">Blog</a>
        </div>

        <div>
          <h6>Legal</h6>
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Security</a>
        </div>

        <div className="text-end">
          <h6>
            <a href="" className="d-inline">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="" className="d-inline">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a href="" className="d-inline">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </h6>
          <a href="">
            Tesmot house, Abdulrahman Okene close, Victoria Island,
            Lagos, Nigeria.
          </a>
          <a href="">contact@piggyvest.com</a>
          <a href="">+234 700 933 933 933</a>
        </div>
        </div>

        <p className="text-center mt-5">
        Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our <br /> customers have saved and invested billions of Naira that they would normally be tempted to spend.
        </p>

        <p className="text-center text-primary">
        2016 - 2023 PiggyTech Global Limited - RC 1405222
        </p>
      </footer>
    </>
  );
};

export default Footer;
