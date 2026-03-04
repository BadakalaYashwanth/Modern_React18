import React, { useState, useEffect } from "react";


function RealTimeDateDemo() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addOneHour = () => {
    const newDate = new Date(date);
    newDate.setHours(date.getHours() + 1);
    setDate(newDate);
  };

  const addOneMinute = () => {
    const newDate = new Date(date);
    newDate.setMinutes(date.getMinutes() + 1);
    setDate(newDate);
  };

  const addOneSecond = () => {
    const newDate = new Date(date);
    newDate.setSeconds(date.getSeconds() + 1);
    setDate(newDate);
  };

  const addOneDay = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate);
  };

  const addOneMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };

  const addOneYear = () => {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear() + 1);
    setDate(newDate);
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0">
        <div className="card-body">

          <h2 className="text-center mb-4 fw-bold text-primary">
            Real Time and Date Demo
          </h2>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <h4 className="fw-bold mb-3">Formatted Output</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      toDateString(): {date.toDateString()}
                    </li>
                    <li className="list-group-item">
                      toLocaleDateString(): {date.toLocaleDateString()}
                    </li>
                    <li className="list-group-item">
                      toTimeString(): {date.toTimeString()}
                    </li>
                    <li className="list-group-item">
                      toLocaleTimeString(): {date.toLocaleTimeString()}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card h-100 border-success">
                <div className="card-body">
                  <h4 className="fw-bold mb-3">Getter Methods</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      getHours(): {date.getHours()}
                    </li>
                    <li className="list-group-item">
                      getMinutes(): {date.getMinutes()}
                    </li>
                    <li className="list-group-item">
                      getSeconds(): {date.getSeconds()}
                    </li>
                    <li className="list-group-item">
                      getMilliseconds(): {date.getMilliseconds()}
                    </li>
                    <li className="list-group-item">
                      getDay(): {date.getDay()}
                    </li>
                    <li className="list-group-item">
                      getDate(): {date.getDate()}
                    </li>
                    <li className="list-group-item">
                      getMonth(): {date.getMonth()} (0 January to 11 December)
                    </li>
                    <li className="list-group-item">
                      getFullYear(): {date.getFullYear()}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="fw-bold mb-3 text-center">Setter Controls</h4>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <button className="btn btn-primary" onClick={addOneHour}>
                Add 1 Hour
              </button>
              <button className="btn btn-success" onClick={addOneMinute}>
                Add 1 Minute
              </button>
              <button className="btn btn-warning" onClick={addOneSecond}>
                Add 1 Second
              </button>
              <button className="btn btn-info text-white" onClick={addOneDay}>
                Add 1 Day
              </button>
              <button className="btn btn-secondary" onClick={addOneMonth}>
                Add 1 Month
              </button>
              <button className="btn btn-danger" onClick={addOneYear}>
                Add 1 Year
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RealTimeDateDemo;