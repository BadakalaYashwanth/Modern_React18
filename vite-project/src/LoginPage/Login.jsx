function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <form
        className="border alert alert-warning border-secondary p-4"
        style={{ width: "360px" }}
      >
        <h3 className="bi bi-person-circle mb-3"> User Login</h3>

        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>

        <button className="btn btn-warning w-100">Login</button>
      </form>
    </div>
  )
}

export default Login
