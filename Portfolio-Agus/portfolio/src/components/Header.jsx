import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top ">
  <div className="container-fluid  ">
    <a className="navbar-brand text-white" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/portfolio'>Portfolio</Link>
        </li> 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-white" href="#">Action</a></li>
            <li><a className="dropdown-item text-white" href="#">Another action</a></li>
            <li><hr className="dropdown-divider text-white"/></li>
            <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
