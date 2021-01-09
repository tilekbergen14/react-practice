import React from 'react';
import {MovieContext} from "../MovieContext"

const Movie = (props) => {
    return (
        <div>
            <MovieContext.Consumer>
                {context => {
                    const movie = context.movies.filter(movie => movie.slug === props.match.params.id)
                    return(
                        <div style={{display: "flex"}}>
                            <img style={{flex: 1, height: 350, width: 250}} src={movie[0].img} alt="img" />
                            <div style={{flex: 2, margin: 10}}>
                                <h3>{movie[0].name}</h3>
                                <p style={{fontStyle: "italic"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi corporis natus velit reprehenderit nam vel quia. Rem, rerum enim eveniet inventore necessitatibus recusandae, nobis in illo quia aperiam ipsam non odio veniam placeat, repellendus voluptatum sit ducimus consequatur omnis iste. Autem praesentium ea, unde dolor vitae facilis a animi distinctio consequuntur, in cupiditate doloribus ducimus odio. Officia, reiciendis? Laborum debitis nostrum nisi, culpa, minima consequuntur sunt enim vel quo quasi eum qui! Cumque, sint qui quaerat itaque odit, mollitia dolorum voluptatum, rem debitis provident voluptas eius sequi consequuntur accusamus placeat laudantium ducimus facere? Similique dolor sequi mollitia harum ea.</p>
                            </div>
                        </div>
                    )
                }}
            </MovieContext.Consumer>
        </div>
    );
}

export default Movie;
