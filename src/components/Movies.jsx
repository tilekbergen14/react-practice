import React from 'react';
import InlineMovie from "./InlineMovie"
import {MovieContext} from "../MovieContext"

const Movies = () => {
    return (
        <div>
            <MovieContext.Consumer>
                 {context => {
                     return (
                         <div className="movie-list">
                              {context.movies.map(movie => <InlineMovie key={movie.id} movie={movie}/>)}
                         </div>
                     )
                 }}
            </MovieContext.Consumer>
        </div>
    )
}
export default Movies;