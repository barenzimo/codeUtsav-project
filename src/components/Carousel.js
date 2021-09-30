import React from "react";
import { reviewData } from "../utils/constants";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide mt-2  "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {/* carousel items go here */}

        <div className="carousel-item active">
          {/* first carousel item */}
          <div className="d-flex flex-row">
            <div className="d-flex flex-column justify-content-center">
              <img
                className="rounded-circle"
                alt="avatar"
                src="https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618813"
                width="80%"
              />
              <p className="mx-5 fw-lighter" style={styles.name}>
                {reviewData[0].name}
              </p>
              <p className="mx-5 fw-lighter">{reviewData[0].userName}</p>
            </div>
            <div className="d-flex align-items-center flex-column align-items-center">
              {" "}
              <p className="fst-italic fs-5 opacity-75">
                {reviewData[0].review}
              </p>
              <img
                width="15%"
                className="text-center"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/5_stars.svg/1280px-5_stars.svg.png"
                alt="rating stars"
              />
            </div>
          </div>{" "}
        </div>
        {reviewData.map((e) => {
          return (
            <div className="carousel-item">
              <div className="d-flex flex-row px-3">
                <div className="d-flex flex-column justify-content-center">
                  <img
                    className="rounded-circle"
                    alt="avatar"
                    src="https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618813"
                    width="80%"
                  />
                  <p className="mx-5 fw-lighter" style={styles.name}>
                    {e.name}
                  </p>
                  <p className="  mx-5 fw-lighter">{e.userName}</p>
                </div>
                <div className="d-flex align-items-center p-4 d-flex flex-column align-items-center">
                  {" "}
                  <p className="fst-italic fs-5 opacity-75">{e.review}</p>
                  <img
                    width="15% "
                    className="text-center"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/5_stars.svg/1280px-5_stars.svg.png"
                    alt="rating stars"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev ps-5"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const styles = {
  name: {
    fontSize: "1.4rem",
    marginBottom: "-10px",
  },
};

export default Carousel;
