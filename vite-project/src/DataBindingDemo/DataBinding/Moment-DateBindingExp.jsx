import { useState } from "react";
import moment from "moment";

function MomentDataBinding() {

  // Create a state variable called today.
  // today stores a Date object.
  // setToday is the function used to update that date if needed.
  // new Date("2025-09-17") sets the initial date value.
  const [today, setToday] = useState(new Date("2025-09-17"));

  return (
    <div className="container p-4">

      {/* Page heading */}
      <h2>Data Binding</h2>

      {/*
        moment(today) converts the JavaScript Date object into a moment object.
        .format("dddd DD, MMMM YYYY") formats the date into a readable string.

        dddd  -> Full day name, example Wednesday
        DD    -> Day number, example 17
        MMMM  -> Full month name, example September
        YYYY  -> Full year, example 2025

        The formatted result is displayed inside this paragraph.
      */}
      <p>{moment(today).format("dddd DD, MMMM YYYY")}</p>

    </div>
  );
}

export default MomentDataBinding;