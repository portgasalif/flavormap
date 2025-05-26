export const apiKey = process.env.REACT_APP_YELP_API_KEY;

const Yelp = {
  search(searchTerm, location, sortOption) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockData = [
          {
            id: "1",
            imageSrc:
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
            name: `${searchTerm} Bistro`,
            address: "123 Main Street",
            city: location.split(",")[0] || "New York",
            state: "NY",
            zipcode: "10001",
            category: "Modern American",
            rating: 4.5,
            reviewCount: 128,
          },
          {
            id: "2",
            imageSrc:
              "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
            name: `The ${searchTerm} House`,
            address: "456 Food Avenue",
            city: location.split(",")[0] || "Los Angeles",
            state: "CA",
            zipcode: "90210",
            category: "International",
            rating: 4.8,
            reviewCount: 89,
          },
          {
            id: "3",
            imageSrc:
              "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
            name: `Best ${searchTerm} Kitchen`,
            address: "789 Delicious St",
            city: location.split(",")[0] || "Chicago",
            state: "IL",
            zipcode: "60601",
            category: "Contemporary",
            rating: 4.3,
            reviewCount: 156,
          },
          {
            id: "4",
            imageSrc:
              "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
            name: `${searchTerm} & Co`,
            address: "321 Gourmet Lane",
            city: location.split(",")[0] || "Miami",
            state: "FL",
            zipcode: "33101",
            category: "Fine Dining",
            rating: 4.6,
            reviewCount: 203,
          },
          {
            id: "5",
            imageSrc:
              "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
            name: `Local ${searchTerm} Spot`,
            address: "654 Neighborhood Rd",
            city: location.split(",")[0] || "Seattle",
            state: "WA",
            zipcode: "98101",
            category: "Casual Dining",
            rating: 4.2,
            reviewCount: 74,
          },
        ];

        let sortedData = [...mockData];
        switch (sortOption) {
          case "rating":
            sortedData.sort((a, b) => b.rating - a.rating);
            break;
          case "review_count":
            sortedData.sort((a, b) => b.reviewCount - a.reviewCount);
            break;
          default:
            break;
        }

        resolve(sortedData);
      }, 800);
    });
  },
};

export default Yelp;
