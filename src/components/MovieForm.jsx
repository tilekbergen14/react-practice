import React from "react"
import {MovieContext} from "../MovieContext"

function MovieForm(){
    return(
        <MovieContext.Consumer>
            {context => {
                return(
                    <div className="movie-form">
                        <input onChange={context.movieName} value={context.name} className="movie-input" name="name" placeholder="Movie name"/>
                        <input onChange={context.movieImg} value={context.img} className="movie-input" name="img" placeholder="Movie img url"/>
                        <input onChange={context.movieUrl} value={context.url} className="movie-input" name="slug" placeholder="Slug"/>
                        <button onClick={context.addMovie} className="movie-btn" >Add</button>
                    </div>
                )
            }}
        </MovieContext.Consumer>
    )
}

export default MovieForm