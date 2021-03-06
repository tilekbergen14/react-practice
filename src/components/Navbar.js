import React from "react"
import {Link} from "react-router-dom"
function Navbar(){
    return(
        <div className="navbar">
            <h2 className="logo">Logo</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/todo">Todos</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/addmovie">Add movie</Link></li>
            </ul>
        </div>
    )
}

export default Navbar