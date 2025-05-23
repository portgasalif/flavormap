import "./Business.css";
function Business({ business }) {
  return (
    <div className="Business">
      <img src={business.imageSrc} alt={business.name} />
      <div className="business-info">
        <h3>{business.name}</h3>
        <div className="business-content">
          <div className="business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>
              {business.state} {business.zipcode}
            </p>
          </div>
          <div className="business-details">
            <p className="category">{business.category}</p>
            <p className="rating">{business.rating} stars</p>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Business;
