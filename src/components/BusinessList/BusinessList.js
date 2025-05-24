import Business from "../Business/Business";
import "./BusinessList.css";
function BusinessList({ businesses }) {
  return (
    <div className="business-list">
      {businesses.map((business) => {
        return <Business key={business.id} business={business} />;
      })}
    </div>
  );
}
export default BusinessList;
