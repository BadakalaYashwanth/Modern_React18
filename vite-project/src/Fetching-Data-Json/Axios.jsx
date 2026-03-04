import { useState, useEffect } from "react";
import axios from "axios";

function Flipkart() {

  // Create a state variable called product.
  // This will store one product object.
  // We give default values so the page does not crash
  // before the real data is loaded from JSON.
  const [product, setProduct] = useState({
    title: null,
    price: 0,
    image: null,
    rating: {
      rate: 0,
      ratings: 0,
      reviews: 0
    },
    offers: []
  });

  // This function loads product data from the JSON file.
  function loadProduct() {

    // axios.get sends a request to the server.
    // "/products.json" means the file is inside public folder.
    axios.get("/products.json")

      // This part runs when the request is successful.
      .then(response => {

        // response.data contains the full JSON object.
        // Our JSON has a "products" array.
        // We are selecting the first product from that array.
        setProduct(response.data.products[0]);
      })

      // This part runs if there is an error like no internet.
      .catch(error => {

        // Print error in the console.
        // In real apps, you may show error in UI.
        console.log("Error fetching data:", error);
      });
  }

  // useEffect runs when the component loads.
  // The empty array [] means it runs only one time.
  // We use it to load data when the page opens.
  useEffect(() => {
    loadProduct();
  }, []);

  // This part returns the user interface.
  // It displays the product details on the screen.
  return (
    <div className="row mt-4">

      {/* Left side shows the product image */}
      <div className="col-3">
        <img src={product.image} width="100%" />
      </div>

      {/* Right side shows product information */}
      <div className="col-9">

        {/* Show product title */}
        <div className="fs-5">
          {product.title}
        </div>

        {/* Show rating information */}
        <div className="mt-2">

          {/* Rating number */}
          <span className="badge bg-success text-white rounded">
            {product.rating.rate}
          </span>

          {/* Total ratings and reviews */}
          <span className="mx-2 fw-bold text-secondary">
            {product.rating.ratings.toLocaleString("en-in")} ratings &
            {product.rating.reviews} reviews
          </span>
        </div>

        {/* Show product price in Indian currency format */}
        <div className="my-2 fs-1 fw-bold">
          {product.price.toLocaleString("en", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0
          })}
        </div>

        {/* Show available offers */}
        <div className="mt-4">
          <h6>Available Offers</h6>

          <ul className="list-unstyled">

            {/* Loop through offers array and show each offer */}
            {product.offers.map((offer, index) => (
              <li key={index}>
                {offer}
              </li>
            ))}

          </ul>

        </div>

      </div>
    </div>
  );
}

export default Flipkart;