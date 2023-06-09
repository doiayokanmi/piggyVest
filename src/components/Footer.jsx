import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-5">
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
            Tesmot house, Abdulrahman Okene <br /> close, Victoria Island,
            Lagos, Nigeria.
          </a>
          <a href="">contact@piggyvest.com</a>
          <a href="">+234 700 933 933 933</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
