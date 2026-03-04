// Import useState from React
// This hook lets us store and update data in the component
import { useState } from "react"

// Function EXPRESSION based component
// The function is stored in a variable
const UserStatusExpression = function () {

  // State to store user name
  // Starts as an empty string
  const [userName, setUserName] = useState("")

  // State to track login status
  // false means user is not logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Function to handle login
  function handleLogin() {
    // Do not allow login if name is empty
    if (userName.trim() === "") {
      return
    }

    // Update login state to true
    setIsLoggedIn(true)
  }

  // Function to handle logout
  function handleLogout() {
    // Clear user name
    setUserName("")

    // Set login state back to false
    setIsLoggedIn(false)
  }

  // JSX returned by the component
  return (
    <div className="container p-5">

      {/* Component heading */}
      <h2>Function Expression Example</h2>

      {/* Show input only if user is not logged in */}
      {!isLoggedIn && (
        <>
          {/* Input field for user name */}
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter your name"
            value={userName}
            onChange={(event) =>
              // Update state when user types
              setUserName(event.target.value)
            }
          />

          {/* Login button */}
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </>
      )}

      {/* Show welcome message only if user is logged in */}
      {isLoggedIn && (
        <div className="alert alert-success mt-3">

          {/* Display user name from state */}
          Welcome, {userName}

          {/* Logout button */}
          <div className="mt-2">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

// Export the component so it can be used in App.jsx
export default UserStatusExpression
