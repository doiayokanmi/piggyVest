import React from 'react'

const SecuritySection = () => {
  return (
    <>
        <section id="securityCon">
            <div id="securityImg">
                <img src="/src/image/security icon.png" alt="" width={"100px"} />
            </div>

            <div id="securityText">
                <h4>
                Your security is our priority
                </h4>

                <p className='mb-4'>
                PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.
                </p>

                <a href="">
                    Learn more >
                </a>
            </div>
        </section>
    </>
  )
}

export default SecuritySection