import { useState } from "react";

export function BooleanDemo() {

    const [stock] = useState(true);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container text-center p-4" style={{ maxWidth: "600px" }}>

                <h2>Boolean Handling in React</h2>
                <hr />

                <p>
                    Boolean value in state:
                    <strong> {stock === true ? "true" : "false"} </strong>
                </p>

                <p className="text-muted">
                    React cannot display boolean values directly.
                    They must be converted to strings or JSX.
                </p>

            </div>
        </div>
    );
}
