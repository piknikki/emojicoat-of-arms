import React from 'react';
import '../CreateCoatOfArms/CreateCoatOfArms.css'
import Coats from "../Coats/Coats";
import { Link } from "react-router-dom";

const Gallery = ({ savedCoats }) => {

  return (
    <div className="gallery-feedback">
      {savedCoats ?
        <div>
          <Coats coats={savedCoats}/>
          <Link to="/create" >
            <button className="gallery-start-btn">
              Make more!!
              <span className="toolbox">🧰</span>
            </button>
          </Link>
        </div>
        :
        <div>
          <h3>Looks like you've got a clean slate to make something great! </h3>
          <Link to="/create" >
            <button className="gallery-start-btn">
              Get Started Now
              <span className="toolbox">🧰</span>
            </button>
          </Link>
        </div>}
    </div>
  )
}

export default Gallery;
