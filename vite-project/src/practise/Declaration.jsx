// Import useState from React
// useState is used to store and update data inside the component
import { useState } from "react";

// Calculator component created using function declaration
// This function represents one React component
function CalculatorDeclaration() {

  // State to store the first number entered by the user
  // Initial value is empty string because input values are strings
  const [firstNumber, setFirstNumber] = useState("");

  // State to store the second number entered by the user
  const [secondNumber, setSecondNumber] = useState("");

  // State to store the calculation result
  // null means no result is shown at the beginning
  const [result, setResult] = useState(null);

  // Function to handle addition
  function handleAddition() {
    // Convert string values to numbers and add them
    const sum = Number(firstNumber) + Number(secondNumber);

    // Store the result in state
    // Updating state causes the component to re render
    setResult(sum);
  }

  // Function to handle subtraction
  function handleSubtraction() {
    // Convert values to numbers and subtract
    const subtraction = Number(firstNumber) - Number(secondNumber);

    // Update result state
    setResult(subtraction);
  }

  // Function to handle division
  function handleDivision() {

    // Check if second number is zero
    // Division by zero is not allowed
    if (Number(secondNumber) === 0) {
      // Set result as a message instead of a number
      setResult("Undefined");
      return; // Stop execution
    }

    // Perform division after validation
    const division = Number(firstNumber) / Number(secondNumber);

    // Update result state
    setResult(division);
  }

  // Function to handle multiplication
  function handleMultiplication() {
    // Convert values to numbers and multiply
    const multi = Number(firstNumber) * Number(secondNumber);

    // Store multiplication result
    setResult(multi);
  }

  // JSX returned by the component
  // This defines what appears on the screen
  return (
    // Outer div used to center the calculator on the screen
    <div className="d-flex justify-content-center align-items-center vh-100">

      {/* Inner container for calculator content */}
      <div className="container p-3">

        {/* Heading of the Calculator */}
        <h2>Calculator, Function Declaration</h2>

        {/* Input field for first number */}
        {/* This is a controlled input because value comes from state */}
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Enter the First Number"
          value={firstNumber}
          onChange={(event) =>
            // Update firstNumber state when user types
            setFirstNumber(event.target.value)
          }
        />

        {/* Input field for second number */}
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Enter the Second Number"
          value={secondNumber}
          onChange={(event) =>
            // Update secondNumber state when user types
            setSecondNumber(event.target.value)
          }
        />

        {/* Buttons for calculator operations */}
        <div className="d-flex gap-2">

          {/* Addition button */}
          <button className="btn btn-primary" onClick={handleAddition}>
            Add
          </button>

          {/* Subtraction button */}
          <button className="btn btn-success" onClick={handleSubtraction}>
            Subtract
          </button>

          {/* Division button */}
          <button className="btn btn-primary" onClick={handleDivision}>
            Division
          </button>

          {/* Multiplication button */}
          <button className="btn btn-success" onClick={handleMultiplication}>
            Multiplication
          </button>
        </div>

        {/* Result display */}
        {/* Result is shown only when result is not null */}
        {result !== null && (
          <div className="alert alert-info mt-3">
            Result: {result}
          </div>
        )}

      </div>
    </div>
  );
}

// Export the component so it can be used in App.jsx
export default CalculatorDeclaration;
