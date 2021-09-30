import React from "react";
import AppBar from "../components/AppBar";

const Top = () => {
  return (
    <div style={styles.top}>
      <div style={styles.imgDiv}>
        <img
          src="https://thisisneat.com.au/wp-content/themes/neat/shared/img/hero-background-homepage.svg"
          alt="img"
          width="100%"
        />
        {/* div of contents present over the image */}
        <div
          className="d-flex flex-column align-items-center justify-content-evenly "
          style={styles.contentDiv}
        >
          {/* headings text div */}
          <AppBar />
          <div>
            <h1 className="text-center fw-light mb-3" style={styles.heading}>
              You move out, we clean up.
            </h1>
            <h3 className="text-center fw-lighter">
              The simplest way to get your bond back.{" "}
              <span>
                <i>Guarenteed.*</i>
              </span>
            </h3>
          </div>
          <img
            className="mt-5"
            width="27%"
            src="https://thisisneat.com.au/wp-content/uploads/2020/01/bond-cleaning-customers.svg"
            alt="people"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  top: {
    backgroundColor: "#1B9DFF",
    color: "#ffff",
    height: "100%",
    position: "relative",
  },
  heading: {
    fontSize: "3rem",
  },
  imgDiv: {
    // width: "100%",
    // height: "100%",
    // position: "absolute",
    // top: 0,
    // left: 0,
    // zIndex: 0,
  },
  contentDiv: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: "10",
  },
};

export default Top;
