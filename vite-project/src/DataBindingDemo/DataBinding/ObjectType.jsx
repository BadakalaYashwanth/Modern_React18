import { useState } from "react";

export function ObjectType() {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "SAMSUNG TV",
            price: 45000,
            brand: "Samsung",
            category: "Electronics",
            stock: 25,
            warrantyYears: 2,
            shippedTo: ["Andhra Pradesh", "Telangana"],
            rating: {
                rate: 4.5,
                count: 600
            },
            features: ["4K UHD", "Smart TV", "HDR"],
            isAvailable: true
        },
        {
            id: 2,
            name: "APPLE iPhone 14",
            price: 79999,
            brand: "Apple",
            category: "Mobile",
            stock: 15,
            warrantyYears: 1,
            shippedTo: ["Karnataka", "Tamil Nadu", "Telangana"],
            rating: {
                rate: 4.7,
                count: 1200
            },
            features: ["A15 Bionic", "OLED Display", "Face ID"],
            isAvailable: true
        },
        {
            id: 3,
            name: "SONY Headphones",
            price: 19999,
            brand: "Sony",
            category: "Accessories",
            stock: 40,
            warrantyYears: 1,
            shippedTo: ["Andhra Pradesh", "Kerala", "Maharashtra"],
            rating: {
                rate: 4.3,
                count: 350
            },
            features: ["Noise Cancellation", "Bluetooth", "Fast Charging"],
            isAvailable: false
        }
    ]);

    return (
        <div className="container p-4">
            <h3 className="mb-3 fw-bold">Product Table</h3>
            <table className="table bg-dark text-white">
                <thead>
                    <tr>
                        {Object.keys(products[0]).map(key => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
            </table>

            <h3 className="mt-4 mb-3">Product Details</h3>

            <dl>
                <dt>Name</dt>
                <dd>{products[0].name}</dd>

                <dt>Price</dt>
                <dd>
                    {products[0].price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0
                    })}
                </dd>

                <dt>Shipped</dt>
                <dd>
                    <ul>
                        {products[0].shippedTo.map(city => (
                            <li key={city}>{city}</li>
                        ))}
                    </ul>
                </dd>

                <dt>Ratings</dt>
                <dd>
                    <span className="badge bg-success rounded p-2 me-2">
                        {products[0].rating.rate}
                        <span className="bi bi-star-fill ms-1"></span>
                    </span>
                    <span className="fw-bold text-secondary">
                        {products[0].rating.count} ratings
                    </span>
                </dd>
            </dl>

            <dl>
                <dt>Name</dt>
                <dd>{products[1].name}</dd>

                <dt>Price</dt>
                <dd>
                    {products[1].price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0
                    })}
                </dd>

                <dt>Shipped</dt>
                <dd>
                    <ul>
                        {products[1].shippedTo.map(city => (
                            <li key={city}>{city}</li>
                        ))}
                    </ul>
                </dd>

                <dt>Ratings</dt>
                <dd>
                    <span className="badge bg-success rounded p-2 me-2">
                        {products[1].rating.rate}
                        <span className="bi bi-star-fill ms-1"></span>
                    </span>
                    <span className="fw-bold text-secondary">
                        {products[1].rating.count} ratings
                    </span>
                </dd>
            </dl>
        </div>
    );
}
