export function DataBinding() {
  const Electronic = [
    "All",
    "Electronics",
    "Fashion",
    "Footwear",
    "Clothes",
    "Ties",
    "Watches",
    "Home-Appliance"
  ];

  return (
    <div className="container p-4">
      <h2 className="mb-4">Array Data Binding</h2>

      {/* Buttons Section */}
      <section className="mb-5">
        <h4 className="mb-3">Buttons Binding</h4>
        <div className="d-flex flex-wrap gap-2">
          {Electronic.map(category => (
            <button
              key={category}
              className="fw-bold btn btn-success"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Ordered List Section */}
      <section className="mb-5">
        <h4 className="mb-3">Ordered List</h4>
        <ol>
          {Electronic.map(category => (
            <li key={category} className="fw-bold">
              {category}
            </li>
          ))}
        </ol>
      </section>

      {/* Dropdown Section */}
      <section className="mb-5">
        <h4 className="mb-3">Dropdown Binding</h4>
        <select className="form-select w-50">
          {Electronic.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </section>

      {/* Checkbox Section */}
      <section>
        <h4 className="mb-3">Checkbox List</h4>
        <ul className="list-unstyled">
          {Electronic.map(category => (
            <li key={category} className="mb-2">
              <input
                type="checkbox"
                id={category}
                className="form-check-input me-2"
              />
              <label
                htmlFor={category}
                className="form-check-label"
              >
                {category}
              </label>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
