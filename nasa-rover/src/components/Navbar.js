import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{width: "100vw", height: "4rem", backgroundColor: 'black'}}>
      <Link to="/curiosity">Curiosity</Link>
    </div>
  )
}

export default Navbar
