function Navbar() {
  return (
    <nav className="bg-dark text-white px-4 py-3 d-flex justify-content-between">
      <div className="fw-bold">Shopping</div>
      
      <div>
        <span className="me-3 p-4">Home</span>
        <span className="me-3 p-4">Shop</span>
        <span className="me-3 p-4">Pages</span>
        <span className="me-3 p-4">Blog</span>
        <span>Contact</span>
      </div>
    </nav>
  )
}

export default Navbar
