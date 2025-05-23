import Business from "../Business/Business";

function BusinessList({ businesses }) {
  return (
    <div className="business-list">
      {businesses.map((business) => {
        return <Business key={business.name} business={business} />;
      })}
    </div>
  );
}
export default BusinessList;