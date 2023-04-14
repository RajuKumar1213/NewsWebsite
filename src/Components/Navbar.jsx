import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar`} style={{backgroundColor : props.mode==="light"? "#d8d8d8" : "rgb(27 26 26)" }}>
        <div className="container-fluid">
          <Link style={{ color :props.mode==="light"? "black" : "white"}} className="navbar-brand" to="/general">News-Monkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item"><Link style={{ color :props.mode==="light"? "black" : "white"}} className="nav-link " aria-current="page" to="/business">Business</Link></li>
              <li className="nav-item"><Link style={{ color :props.mode==="light"? "black" : "white"}} className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link style={{ color :props.mode==="light"? "black" : "white"}} className="nav-link " aria-current="page" to="/general">General</Link></li>
              <li className="nav-item"><Link style={{ color :props.mode==="light"? "black" : "white"}} className="nav-link " aria-current="page" to="/health">Health</Link></li>
              <li className="nav-item"><Link style={{ color :props.mode==="light"? "black" : "white"}} className="nav-link " aria-current="page" to="/science">Science</Link></li>
              <li className="nav-item"><Link style={{ color :props.mode==="light"? "black" : "white"}} className="nav-link " aria-current="page" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link style={{ color :props.mode==="light"? "black" : "white"}} className="nav-link " aria-current="page" to="/technology">Technology</Link></li>
            </ul>
          </div>
        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
          <input onClick={props.toggleTheme} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Enable {props.mode==="light" ? "dark" : "light"} mode</label>
        </div>
        </div>  
      </nav>
    </div>
  )
}

export default Navbar;
