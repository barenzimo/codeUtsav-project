import React from "react";
import Carousel from "../components/Carousel";
const Reviews = () => {
  return (
    <div className="" style={styles.reviewPage}>
      <h1 className="text-center fw-lighter ">Our Reviews</h1>
      <p className="text-center fw-lighter fs-4 ls-1 pb-5">
        We believe our work speaks for itself, but our customers vouch for us
        too. Here’s just a few of the reviews that make up our{" "}
        <span>
          <a href="http://google.com">4.9 Star rating</a> on{" "}
          <span>
            {" "}
            <img
              className="mx-2"
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              width="10%"
              alt="person"
            />
          </span>
        </span>{" "}
      </p>
      <Carousel />
    </div>
  );
};

const styles = {
  reviewPage: {
    padding: "0 15%",
    margin: "8rem 0 4rem",
  },
};

export default Reviews;
