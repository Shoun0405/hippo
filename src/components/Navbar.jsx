import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to={"/"}>
      Hippo
    </Link>
    <div className="d-flex justify-content-between">
      <Link className='mx-5 nav-link' to={'/'} >Add Market</Link>
    </div>
  </div>
</nav>
  )
}

export default Navbar