export const apiKey = process.env.REACT_APP_YELP_API_KEY;

const Yelp = {
  search(searchTerm, location, sortOption) {
    const url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&sort_by=${sortOption}`;

    return fetch(url, {});
  },
};
