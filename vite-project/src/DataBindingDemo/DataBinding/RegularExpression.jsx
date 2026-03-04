import { useState } from "react";

function PasswordValidation() {

  // State to store the password entered by user
  const [password, setPassword] = useState("");

  // Regex pattern:
  // ^                         -> Start of string
  // (?=.*[a-z])               -> At least one lowercase letter
  // (?=.*[A-Z])               -> At least one uppercase letter
  // (?=.*\d)                  -> At least one digit
  // (?=.*[@$!%*?&])           -> At least one special character
  // [A-Za-z\d@$!%*?&]{8,}     -> Minimum 8 characters allowed
  // $                         -> End of string
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Check if password matches regex
  const isValid = pattern.test(password);

  return (
    <div className="container p-4">
      <h2>Password Validation Practice</h2>

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Enter strong password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {
        password.length > 0 &&
        (isValid ? 
          <p className="text-success">Strong Password</p> :
          <p className="text-danger">
            Password must contain uppercase, lowercase, number, special character and minimum 8 characters
          </p>
        )
      }

    </div>
  );
}

export default PasswordValidation;