import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
            <h1><Link class="navbar-brand" exact to="/">WikiCountries</Link></h1>
        </div>
      </nav>
    )
}

export default Navbar;