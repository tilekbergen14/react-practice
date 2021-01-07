import React from "react"

function Navbar(){
    return(
        <div className="navbar">
            <h2 className="logo">Logo</h2>
            <ul>
                <li><a href="home">Home</a></li>
                <li><a href="todo">Todo</a></li>
            </ul>
        </div>
    )
}

export default Navbar