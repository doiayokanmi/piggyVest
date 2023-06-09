import React from "react";

const Navbar = () => {
  let logoImg = "/src/image/PiggyVest Logo.svg";
  return (
    <>
      <div id="navContainer">
        <nav className="nav">
          <div id="brandCon">
            <a href="">
              <img src={logoImg} className="me-5 img-fluid" />
            </a>

            <div id="navLink">
              <a href="" className="nav-item">
                Save
              </a>
              <a href="" className="nav-item">
                Invest
              </a>
              <a href="" className="nav-item">
                Stories
              </a>
              <a href="" className="nav-item">
                FAQs
              </a>
              <a href="" className="nav-item">
                Resources
              </a>
            </div>
          </div>

          <div id="accountCreation">
            <a href="" className="me-2" id="signIn">Sign In</a>
            <a href="" id="signUp">Create free Account</a>
          </div>

          <i className="fa-solid fa-bars d-lg-none"></i>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
