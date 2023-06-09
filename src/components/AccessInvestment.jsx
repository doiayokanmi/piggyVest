import React from "react";

const AccessInvestment = () => {
  return (
    <>
      <section id="accessInvestCon" className="my-5">
        <div id="accessImg">
          <img src="/src/image/invest_c3fcc60df0.png" className="img-fluid" alt="" />

          <img src="/src/image/purpleDotted.svg" alt="" id="purpleDotted" />
          <img src="/src/image/bigCircle.svg" alt="" id="bigCircle" />
        </div>

        <div id="accessText">
          <p id="upTo" className="mb-4">
            Up To 25% Returns
          </p>

          <h3 className="mbb-4">Access investment opportunities</h3>

          <p className="my-4">
            Invest securely and confidently on the go. Grow your money
            confidently by investing in pre-vetted investment opportunities.
          </p>

          <a href="">Learn more about Investments </a>
        </div>
      </section>
    </>
  );
};

export default AccessInvestment;
