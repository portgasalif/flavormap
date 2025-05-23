import React from "react";

function Business({ business }) {
  return (
    <div className="Business">
      <img src={business.imageSrc} alt={business.name} />
      <div className="business-info">
        <h3>{business.name}</h3>
        <div className="business-address">
          <p>{business.address}</p>
          <p>
            {business.city}, {business.state} {business.zipcode}
          </p>
        </div>
        <div className="business-details">
          <p>Category: {business.category}</p>
          <p>
            Rating: {business.rating} ({business.reviewCount} reviews)
          </p>
        </div>
      </div>
    </div>
  );
}
export default Business;
