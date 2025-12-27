import React from 'react'

const Navbar = () => {
  return (
    <nav className="argon-navbar d-flex justify-content-between align-items-center  ">

      {/* LEFT SIDE */}
      <div>
        <p className="breadcrumb-text mb-1">Pages / Dashboard</p>
        <h5 className="page-title mb-0">Dashboard</h5>
      </div>

      {/* RIGHT SIDE */}
      <div className="d-flex align-items-center gap-3">
        <input
          type="text"
          className="form-control navbar-search"
          placeholder="Type here..."
        />
        <a
          href="#"
          className="signin-link text-nowrap"
          style={{ fontSize: "15px", fontWeight: 500, color: "white", textDecoration: "none" }}
        >
          Sign In
        </a>

      </div>

    </nav>

  )
}

export default Navbar