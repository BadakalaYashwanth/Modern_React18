// We import useState from React
// useState is used to store and change data inside the component
import { useState } from "react"

// This is our component
// export default means other files can use this component
export default function EventHandler() {

  // We create a state variable
  // message → holds the current value
  // setMessage → function used to change the value
  // "No Notification" → starting value
  const [message, setMessage] = useState("No Notification")

  // This function will run when the button is clicked
  // It is called the event handler
  function handleUpload() {

    // This prints a message in the browser console
    // It is only for testing
    console.log("You received a notification")

    // This changes the state value
    // When state changes, React updates the screen automatically
    setMessage("Notification Received")
  }

  // return tells React what to show on the screen
  return (
    // This is a container with some spacing inside
    <div style={{ padding: "20px" }}>

      {/* This is a heading shown on the screen */}
      <h2>Observer Pattern Example</h2>

      {/* This is the button (Sender) */}
      {/* onClick is the event */}
      {/* handleUpload is the event handler (Subscriber) */}
      <button onClick={handleUpload}>
        Upload New Video
      </button>

      {/* This displays the current value of message */}
      {/* It will change when state changes */}
      <p>{message}</p>

    </div>
  )
}