import { useEffect, useState } from "react";

export default function Flipkart() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("/products.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h3>Loading Products...</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  return (
    <div className="container m-4">
      {products.map((product, index) => (
        <div key={index} className="border p-3 mb-3">

          <h4>{product.title}</h4>

          <p>Price: ₹{product.price}</p>

          <p>
            Rating: {product.rating.rate} |
            {product.rating.ratings} ratings |
            {product.rating.reviews} reviews
          </p>

          <h6>Offers:</h6>
          <ul>
            {product.offers.map((offer, i) => (
              <li key={i}>{offer}</li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
}