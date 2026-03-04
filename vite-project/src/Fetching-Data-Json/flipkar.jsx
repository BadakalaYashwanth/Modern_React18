import { useEffect, useState } from "react";

export function Flipkart() {

  // Create a state variable called products.
  // It will store multiple product objects from JSON file.
  // Initial value is empty array because we are loading many products.
  const [products, setProducts] = useState([]);

  // This function loads data from products.json file.
  function LoadProducts() {

    // Create a new request object.
    var http = new XMLHttpRequest();

    // Configure the request.
    // "get" means we are requesting data.
    // "/products.json" means file is inside public folder.
    // true means asynchronous request.
    http.open("get", "/products.json", true);

    // Send the request to the server.
    http.send();

    // This function runs when request state changes.
    http.onreadystatechange = function () {

      // readyState 4 means request is finished.
      // status 200 means request is successful.
      if (http.readyState === 4 && http.status === 200) {

        // Convert JSON text into JavaScript object.
        const data = JSON.parse(http.responseText);

        // Store only products array inside state.
        setProducts(data.products);
      }
    };
  }

  // useEffect runs only once when component loads.
  useEffect(() => {
    LoadProducts();
  }, []);

  // Return UI
  return (
    <div className="container mt-4">

      <h2 className="mb-4">Flipkart Products</h2>

      {/* Loop through products array and display each product */}
      {products.map((product, index) => (

        <div className="row border p-3 mb-4" key={index}>

          {/* Product Image */}
          <div className="col-3">
            <img src={product.image} width="100%" />
          </div>

          {/* Product Details */}
          <div className="col-9">

            {/* Title */}
            <div className="fs-5">{product.title}</div>

            {/* Rating */}
            <div className="mt-2">
              <span className="badge bg-success text-white">
                {product.rating.rate}
              </span>

              <span className="mx-2 text-secondary">
                {product.rating.ratings} ratings &
                {product.rating.reviews} reviews
              </span>
            </div>

            {/* Price */}
            <div className="my-2 fs-4 fw-bold">
              ₹{product.price}
            </div>

            {/* Offers */}
            <div className="mt-3">
              <h6>Available Offers</h6>

              <ul>
                {product.offers.map((offer, i) => (
                  <li key={i}>{offer}</li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
}