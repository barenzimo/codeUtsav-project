import React from "react";
import Card from "../components/Card";
import { cardsData } from "../utils/constants";

const Services = () => {
  return (
    <div style={styles.card} className="Container  text-center my-5">
      <h1 className="mb-2 text-center fw-lighter">Our services</h1>
      <p className="px-5 mx-5 fw-lighter fs-4">
        Dependable, professional, and experienced. Choose from any of our
        cleaning services and we’ll handle the rest.
      </p>
      <div className="row mt-5">
        {cardsData.map((e) => {
          return (
            <div className="col-md-12 col-lg-4">
              <Card src={e.link} title={e.title} subtitle={e.subtitle} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: "0 9%",
  },
};

export default Services;
