import React from "react";

const BuildSaving = () => {
  return (
    <>
      <section id="buildSavingCon">
        <div id="buildSaving" className="my-5">
          <h3>4 ways to build your savings</h3>

          <p className="mb-5">
            Earn 5%-15% when you save with any of these PiggyVest plans.
          </p>

          <a href="" id="signUp" className="mt-3">
            Start Saving
          </a>
        </div>

        <div id="buildSavingCards">
          <div id="cards">
            <img
              src="/image/piggy_df88262015.png"
              alt=""
              width={"50px"}
              className="mb-5"
            />
            <h5 className="mb-4">Automated Savings</h5>

            <div className="d-flex flex-column gap-5">
              <p>
                Build a dedicated savings faster on your terms automatically or
                manually.
              </p>
              <a href="">
                <img
                  src="/image/arrowDeepBlue.svg"
                  alt=""
                  className="me-2"
                />
                <span>Piggybank</span>
              </a>
            </div>
          </div>

          <div id="cards">
            <img
              src="/image/safelock_4e737ba7d3.png"
              alt=""
              width={"50px"}
              className="mb-5"
            />
            <h5 className="mb-4">Fixed Savings</h5>

            <div className="d-flex flex-column gap-5">
              <p>
              Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.
              </p>
              <a href="">
                <img
                  src="/image/arrowBlue.svg"
                  alt=""
                  className="me-2"
                />
                <span>Safelock</span>
              </a>
            </div>
          </div>

          <div id="cards">
            <img
              src="/image/target_6c049f3410.png"
              alt=""
              width={"50px"}
              className="mb-5"
            />
            <h5 className="mb-4">Goal-oriented Savings</h5>

            <div className="d-flex flex-column gap-5">
              <p>
              Reach all your savings goals faster. Save towards multiple goals on your own or with a group.
              </p>
              <a href="">
                <img
                  src="/image/arrowGreen.svg"
                  alt=""
                  className="me-2"
                />
                <span>Target Savings</span>
              </a>
            </div>
          </div>

          <div id="cards">
            <img
              src="/image/flex_d090f8bce2.png"
              alt=""
              width={"50px"}
              className="mb-5"
            />
            <h5 className="mb-4">Flexible Savings</h5>

            <div className="d-flex flex-column gap-5">
              <p>
              Save, transfer, withdraw, manage and organise your money for free at any time.
              </p>
              <a href="">
                <img
                  src="/image/arrowRedd.svg"
                  alt=""
                  className="me-2"
                />
                <span>Flex Naira</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuildSaving;
