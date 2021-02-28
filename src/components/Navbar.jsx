import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
            <h1>Wiki Countries Lab</h1>
            <Link class="navbar-brand" href="/">WikiCountries</Link>
        </div>
      </nav>
    )
}

export default Navbar;