import React from 'react'
// import './NotFound.css'
import { Link } from "react-router-dom";

const NoRoute = () => {
  return (
    <div className="wrapper-404">
      <div className="oops">
        <h3>Oops!</h3>
        <Link to="/" className="btn">Go back to main page . . .
          <i className="far fa-home fa-2x home"> </i>
        </Link>

        <Link to="/gallery" className="btn">Or to the gallery . . .
          <i className="far fa-home fa-2x home"> </i>
        </Link>
      </div>
    </div>
  )
}

export default NoRoute
