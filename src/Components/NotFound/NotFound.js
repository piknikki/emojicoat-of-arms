import React from 'react'
import './NotFound.css'
import { Link } from "react-router-dom";

const NoRoute = () => {
  return (
    <div className="wrapper-404">
      <h2 className="oops">404 <span>😵</span></h2>
      <p className="oops-p"><span>🤔</span>How did this happen? </p>
      <div className="link-container" >
        <p className="oops-p2">
          oh well.
          <span className="shrug">🤷</span>
          Might as well check out some inspiration
        </p>

        <Link to="/gallery" className="lnk">
          <button className="btn">
            <span className="sparkles">✨</span>
            Gallery
            <span className="sparkles">✨</span>
          </button>
        </Link>

        {/*<Link to="/" className="lnk">*/}
        {/*  <button className="btn">*/}
        {/*    Home*/}
        {/*    <span>🏡</span>*/}
        {/*  </button>*/}
        {/*</Link>*/}
      </div>
    </div>
  )
}

export default NoRoute
