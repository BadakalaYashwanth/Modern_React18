import { useState } from "react"

export default function CreateAccount() {

  // State for input fields
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // State for message
  const [message, setMessage] = useState("Fill the form to create account")

  // Event Handler for form submission
  function handleCreateAccount(e) {
    e.preventDefault() // Prevent page reload

    if (name === "" || email === "" || password === "") {
      setMessage("All fields are required ❌")
      return
    }

    if (!email.includes("@")) {
      setMessage("Invalid Email ❌")
      return
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters ❌")
      return
    }

    setMessage("Account Created Successfully ✅")
  }

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        
        <h3 className="text-center mb-4">Create Account</h3>

        <form onSubmit={handleCreateAccount}>

          {/* Name Input */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Create Account
          </button>

        </form>

        <div className="alert alert-info text-center mt-3">
          {message}
        </div>

      </div>

    </div>
  )
}