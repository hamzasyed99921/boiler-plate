import React from 'react'

const Header = () => {
  return (
  <div classname="header ">
  <nav className="navbar navbar-expand-lg ">
    <div className="container ">
      <a className="navbar-brand logo" href="#"><img src="assets/logo.png" alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Protocol</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Safe</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">GnosisDAO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Developers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Careers</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Header