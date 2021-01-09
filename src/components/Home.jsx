import React from 'react'
import bleach from "../bleach.jpg"
const Home = () => {

    return(
        <div className="homepage">
            <h4>
                Homepage
            </h4>
            <img style={{height: "400px", width: "auto"}} src={bleach} alt="bleach"/>
        </div>
    )
}

export default Home