import { useState } from "react";

export function ObjectType() {
  const [product] = useState([
    { Name: "Samsung TV", Price: 45000 },
    { Name: "Mobile", Price: 25000 },
    { Name: "Watch", Price: 7348 },
    { Name: "Laptop", Price: 87987 }
  ]);

  return (
    <div className="container p-4">
      
      <div className="card shadow">
        <div className="card-header bg-dark text-white">
          <h3 className="mb-0">Product List</h3>
        </div>

        <div className="card-body">
          <table className="table table-hover align-middle">
            <thead className="table-secondary">
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th className="text-end">Price</th>
              </tr>
            </thead>

            <tbody>
              {product.map((item, index) => (
                <tr key={item.Name}>
                  <td>{index + 1}</td>
                  <td className="fw-semibold">{item.Name}</td>
                  <td className="text-end text-success fw-bold">
                    {item.Price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card-footer text-muted text-end">
          Total Products: {product.length}
        </div>
      </div>

    </div>
  );
}
