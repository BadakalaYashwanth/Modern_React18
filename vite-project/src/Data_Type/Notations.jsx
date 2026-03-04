import { useState } from "react";

export function NumberNotationDemo() {

    const [views] = useState(4500000);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container text-center p-4" style={{ maxWidth: "900px" }}>

                <h2>Number Notation Formatting</h2>
                <hr />

                <p>
                    Given Number: <strong>{views}</strong>
                </p>

                <hr />

                <p>
                    <strong>Compact Notation</strong> :
                    {views.toLocaleString("en-IN", {
                        notation: "compact"
                    })}
                </p>
                <p className="text-muted">
                    Compact notation shortens large numbers into readable forms like K, L, or Cr based on region.
                </p>

                <hr />

                <p>
                    <strong>Scientific Notation</strong> :
                    {views.toLocaleString("en-IN", {
                        notation: "scientific"
                    })}
                </p>
                <p className="text-muted">
                    Scientific notation represents numbers using powers of 10.
                </p>

                <hr />

                <p>
                    <strong>Engineering Notation</strong> :
                    {views.toLocaleString("en-IN", {
                        notation: "engineering"
                    })}
                </p>
                <p className="text-muted">
                    Engineering notation is like scientific notation, but the exponent is always a multiple of 3.
                </p>

            </div>
        </div>
    );
}
