// import React from 'react'
import { useNavigate } from "react-router-dom"
import "../../App.css"

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>

      {/* Navbar */}
      <nav className=" navbar navbar-expand-lg bg-info position-sticky top-0 z-1">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <span className="text-dark ">Event</span> <span className="text-dark">  - Sphere</span>
            {/* <img className="logo_image rounded-2" src="https://herculeanprod.blob.core.windows.net/images/Partners/84a3bf65-309d-4dc9-8d8e-03ac363d680e.gif" alt="" /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ms-auto  fw-bold gap-4 fs-6 mt-1 ">
              <li className="nav-item ">
                <a className="nav-link active" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Schedule
                </a>
              </li>
              <li className="nav-item d-flex gap-3">
                <button className="btn btn-info" onClick={() => navigate("/form")}>Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar */}
    </>
  )
}

export default Navbar