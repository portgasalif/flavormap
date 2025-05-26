export const apiKey = process.env.REACT_APP_YELP_API_KEY;

const Yelp = {
  search(searchTerm, location, sortOption) {
    const url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&sort_by=${sortOption}`;

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipcode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};
export default Yelp;