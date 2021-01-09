import React from 'react';
import {Link} from "react-router-dom"

const InlineMovie = (props) => {
    const {name, img, slug} = props.movie
    return (
        <div className="movie-box">
            <Link to={`movies/${slug}`}>
                <img className="movie-img" src={img} alt=""/>
                <h4>{name}</h4>
            </Link>
        </div>
    );
}

export default InlineMovie;
