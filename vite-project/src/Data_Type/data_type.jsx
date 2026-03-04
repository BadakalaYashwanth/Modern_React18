import { useState, useEffect } from "react";

export function NumberDemo() {

    // Base number entered by user
    const [baseNumber, setBaseNumber] = useState(10);

    // Different number representations
    const [floatValue, setFloatValue] = useState(23.21);
    const [exponentValue, setExponentValue] = useState(2e3);
    const [bigIntValue, setBigIntValue] = useState(93888111123n);

    const [binary, setBinary] = useState("");
    const [octal, setOctal] = useState("");
    const [hex, setHex] = useState("");

    // useEffect recalculates number systems when baseNumber changes
    useEffect(() => {
        setBinary("0b" + baseNumber.toString(2));
        setOctal("0o" + baseNumber.toString(8));
        setHex("0x" + baseNumber.toString(16));
    }, [baseNumber]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container text-center p-4" style={{ maxWidth: "500px" }}>

                <h2>Number Types in React</h2>

                <p className="text-muted">
                    Change the number. React recalculates everything using state and effect.
                </p>

                <hr />

                {/* Base Integer Input */}
                <label className="form-label">Base Integer</label>
                <input
                    type="number"
                    className="form-control mb-3"
                    value={baseNumber}
                    onChange={(e) => setBaseNumber(Number(e.target.value))}
                />

                {/* Floating and Exponent */}
                <p><strong>Floating Point:</strong> {floatValue}</p>
                <p><strong>Exponent (2e3):</strong> {exponentValue}</p>

                {/* Number Systems */}
                <p><strong>Binary:</strong> {binary}</p>
                <p><strong>Octal:</strong> {octal}</p>
                <p><strong>Hexadecimal:</strong> {hex}</p>

                {/* BigInt */}
                <p>
                    <strong>BigInt:</strong> {bigIntValue.toString()}
                </p>

                <hr />

                <p className="text-muted">
                    useState stores values.  
                    useEffect recalculates derived data when dependencies change.
                </p>

            </div>
        </div>
    );
}
