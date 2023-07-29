import React from "react";


const Nav = () => {
    return (
        <>
            {/* <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand text-light px-1" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">Brand</a>
            <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
          <a className="nav-link active" style={{color: "#93deff"}} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color: "#93deff"}} href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color: "#93deff"}} href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color: "#93deff"}}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
};





export default Nav;

{/* <nav classNameName="navbar bg-body-tertiary">
<div classNameName="container-fluid">
  <span classNameName="navbar-brand mb-0 h1">Navbar</span>
</div>
</nav> */}