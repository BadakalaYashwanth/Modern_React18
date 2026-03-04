import { useState, useEffect } from "react";

export function TwoWayDataBinding() {

    // useState stores data and keeps it in sync with the UI
    const [username, setUsername] = useState("Yash");
    const [userEmail, setUserEmail] = useState("yashwanth052002@gmail.com");

    // useEffect runs once after the first render
    useEffect(() => {
        setUsername("Yashwanth Krap");
        setUserEmail("yashwanthkrap@gmail.com");
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container text-center p-4">

                <h2>Two Way Data Binding</h2>

                <p>
                    <strong>useState:</strong> Stores data and updates the UI when the data changes.
                </p>

                <p>
                    <strong>useEffect:</strong> Runs code after the component appears on the screen.
                </p>

                <p className="text-muted">
                    Type in the inputs below. The UI updates the state and the state updates the UI.
                </p>

                <hr />

                {/* Input changes state */}
                <input
                    type="text"
                    className="form-control mb-3"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                />

                <input
                    type="email"
                    className="form-control mb-3"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Enter email"
                />

                {/* State reflects back in UI */}
                <p>Hello <strong>{username}</strong></p>
                <p>Your email <strong>{userEmail}</strong> is registered</p>

            </div>
        </div>
    );
}
