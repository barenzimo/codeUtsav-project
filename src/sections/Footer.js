import React from "react";

const Footer = () => {
  return (
    <div className="" style={styles.footer}>
      <div className="" style={styles.footerBody}>
        {/* ALl content goes here */}
        <div className="row mt-5">
          {/* left side contents*/}
          <div className="col-md-4 col-xs-12">
            <div className="d-flex flex-column justify-content-start">
              <p className="my-3">
                This is Neat is a bond cleaning service keeping tenants, real
                estate agents and property managers happy all across Sydney and
                Melbourne.
              </p>
            </div>
          </div>
          <div className="col-md-1 col-xs-0"></div>
          {/*  right side contents*/}
          <div className="col-md-7 col-xs-12">
            <div className="d-flex flex-row justify-content-evenly">
              {/* services */}
              <div className="d-flex flex-column">
                <p className="fs-bold text-decoration-underline">SERVICES</p>
                <p>End of lease cleaning</p>
                <p>Vacate cleaning</p>
                <p>Moving cleaning</p>
              </div>
              {/* locations */}
              <div className="d-flex flex-column">
                <p className="fs-bold text-decoration-underline">SERVICES</p>
                <p>Sydney</p>
                <p>Melbourne</p>
                <p>Inner West</p>
                <p>Surry Hills</p>
                <p>Bondi</p>
                <p>Parramata</p>
              </div>
              {/* contacts */}

              <div className="d-flex flex-column">
                <p className="fs-bold">This Is Neat Cleaning Pty Ltd</p>
                <p>hello@thisisneat.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333333",
    color: "#ffffff",
  },
  footerBody: {
    padding: " 9% 9%",
  },
  ruler: {
    border: "none",
    height: "1px",
    background: "#fff",
  },
};

export default Footer;
