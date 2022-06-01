import React from "react";
import Logo from "../Assects/Logo.png"
import "../Style/MainStyle.css"
import {Link} from "react-router-dom";



function Navbar() {



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand mx-3" to="/">
            <img className="NavbarLogo" src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active mx-3  " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="/HireALawyer">
                  Hire a Lawyer
                </Link>
              </li>

              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle active mx-3"
                  to="/LegalServices"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Legal Services
                </Link>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/legalservices1">
                      Divorce
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/legalservices2">
                      Rent Cases
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/legalservices3">
                      Property cases
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/legalservices4">
                      Child Custody
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/legalservices5">
                      Inheritance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/legalservices6">
                      Overseas Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/legalservices7">
                      Labour Cases
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/legalservices8">
                      Women Rights
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="/contact">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>

         </div>
        </div>
      </nav>
    </div>
   
  );



}

export default Navbar;


