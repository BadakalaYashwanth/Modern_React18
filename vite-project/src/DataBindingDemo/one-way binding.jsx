import { useState, useEffect } from "react";

export function DataBinding() {

    // useState holds data for the UI
    // Changing it using the setter updates the screen
    const [username, setUsername] = useState("Yash");
    const [userEmail, setUserEmail] = useState("yashwanth052002@gmail.com");

    // useEffect runs after the UI is rendered
    // Empty array means it runs only once
    useEffect(() => {
        setUsername("Yashwanth Krap");
        setUserEmail("yashwanthkrap@gmail.com");
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center container p-4">

                <h2>React Hooks Output</h2>

                <p><strong>useState:</strong> Stores data for the component and updates the UI when the data changes.</p>

                <p><strong>useEffect:</strong> Runs code after the component appears on the screen.</p>

                <hr />

                <p>Hello <strong>{username}</strong></p>

                <p>Your email <strong>{userEmail}</strong> is registered</p>

                <p className="text-muted">
                    The UI only displays data. It cannot change state by itself.
                </p>

            </div>
        </div>
    );
}
