import React from "react";

function Card({ src, title, subtitle }) {
  return (
    <div className="mx-2 rounded-3 shadow-lg d-flex flex-lg-column flex-md-row flex-sm-column flex-xs-column ">
      {/* image component */}
      <div className="flex-sm-2 align-items-stretch">
        <img src={src} alt={`${title} `} width="100%" />
      </div>
      {/* Text component */}
      <div className="text-start p-4">
        <p className="fs-4"> {title}</p>
        <p className="opacity-75">{subtitle}</p>
        <a href="www.google.com">Learn more ---</a>
      </div>
    </div>
  );
}

export default Card;
