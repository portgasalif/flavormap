import React from "react";

function Business(name, imageSrc, address) {
  return (
    <div className="business">
      <img src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <p>{address}</p>
    </div>
  );
}

export default Business;
