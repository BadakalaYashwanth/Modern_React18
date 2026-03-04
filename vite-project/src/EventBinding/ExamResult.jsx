import { useState } from "react"

// This is the whole system, like the school office
export function ExamResult() {

  // marks → paper where student writes marks
  // setMarks → hand that changes the paper
  const [marks, setMarks] = useState("")

  // result → teacher's final decision
  // setResult → hand that changes the decision
  const [result, setResult] = useState("Enter your marks")

  // This is the teacher checking the paper
  // This function runs ONLY when button is clicked
  function handleCheck() {

    // Convert text input into number
    const score = Number(marks)

    // If student did not write anything
    if (marks === "") {
      setResult("Please enter marks")
      return
    }

    // If marks are invalid
    if (score > 100 || score < 0) {
      setResult("Invalid Marks")

    // If student passed
    } else if (score >= 35) {
      setResult("Congratulations! You Passed 🎉")

    // If student failed
    } else {
      setResult("You Failed ❌")
    }
  }

  // This is like clearing the paper
  // It runs only when Reset button is clicked
  function handleReset() {
    setMarks("")
    setResult("Enter your marks")
  }

  // This is what we show on the screen
  return (
    <div className="container mt-5 p-5">
      <div className="card shadow-lg p-4">

        <h2 className="text-center mb-4">Exam Result System</h2>

        <div className="mb-3">
          <label className="mb-3">
            Enter your marks
          </label>

          {/* Student writing marks on paper */}
          {/* When user types, onChange event happens */}
          {/* React calls the arrow function automatically */}
          <input
            type="number"
            className="form-control"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            placeholder="Enter your marks"
          />
        </div>

        <div className="d-flex gap-3 mb-3">

          {/* This button is the Sender */}
          {/* Click is the Event */}
          {/* handleCheck is the Subscriber */}
          {/* React calls handleCheck automatically */}
          <button
            className="btn btn-primary"
            onClick={handleCheck}
          >
            Check Result
          </button>

          {/* Reset button works same way */}
          <button
            className="btn btn-danger"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        {/* This shows teacher's decision */}
        {/* When result state changes, React updates UI */}
        <div className="alert alert-info text-center fw-bold">
          {result}
        </div>

      </div>
    </div>
  )
}