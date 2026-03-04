import { useState } from "react";

export function NumberFormattingAllInOne() {

    const [num] = useState(1247583.0934758);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container text-center p-4" style={{ maxWidth: "1000px" }}>

                <h2>React Number Method Formatting</h2>
                <hr />

                <p>
                    Given Number: <strong>{num}</strong>
                </p>

                {/* toFixed */}
                <p>
                    <strong>toFixed(3)</strong> :
                    {num.toFixed(3)}
                    , rounds the number and fixes decimal places
                </p>

                {/* toPrecision */}
                <p>
                    <strong>toPrecision(4)</strong> :
                    {num.toPrecision(4)}
                    , formats total significant digits
                </p>

                {/* toLocaleString basic */}
                <p>
                    <strong>toLocaleString("en-IN")</strong> :
                    {num.toLocaleString("en-IN")}
                    , formats number using Indian locale
                </p>

                {/* toLocaleString with fraction digits */}
                <p>
                    <strong>toLocaleString with fraction digits</strong> :
                    {num.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                    , controls decimal digits in output
                </p>

                {/* Currency formatting */}
                <p>
                    <strong>Currency Formatting</strong> :
                    {num.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </p>

                <hr />

                <h2>Minimum and Maximum Fraction Digits</h2>

                <p>
                    <strong>minimumFractionDigits: 2</strong> :
                    {num.toLocaleString("en-IN", {
                        minimumFractionDigits: 2
                    })}
                    , forces at least 2 decimal digits
                </p>

                <p>
                    <strong>maximumFractionDigits: 2</strong> :
                    {num.toLocaleString("en-IN", {
                        maximumFractionDigits: 2
                    })}
                    , limits decimals and rounds the number
                </p>

                <p>
                    <strong>Both together</strong> :
                    {num.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                    , always shows exactly 2 decimals
                </p>

            </div>
        </div>
    );
}
