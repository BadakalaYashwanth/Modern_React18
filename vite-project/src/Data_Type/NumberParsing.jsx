import { useState } from "react";

export function NumberParsingDemo() {

    const [intValue] = useState("123px");
    const [floatValue] = useState("45.67kg");
    const [invalidValue] = useState("abc");

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container text-center p-4" style={{ maxWidth: "900px" }}>

                <h2>Number Parsing and Validation</h2>
                <hr />

                <p>
                    <strong>parseInt()</strong> :
                    {parseInt(intValue)}
                </p>
                <p className="text-muted">
                    parseInt converts a string to an integer by reading digits until a non number is found.
                </p>

                <hr />

                <p>
                    <strong>parseFloat()</strong> :
                    {parseFloat(floatValue)}
                </p>
                <p className="text-muted">
                    parseFloat converts a string to a floating point number and keeps decimal values.
                </p>

                <hr />

                <p>
                    <strong>isNaN()</strong> :
                    {isNaN(invalidValue).toString()}
                </p>
                <p className="text-muted">
                    isNaN returns true when the value cannot be converted into a valid number.
                </p>

            </div>
        </div>
    );
}
