import React, {useState, createContext} from 'react';
import loveInTheMoonlight from "./images/loveInTheMoonlight.jpg"
import jumong from "./images/jumong.jpg"
import dSun from "./images/DSun.jpg"
import itaewon from "./images/itaewonClass.jpg"
export const MovieContext = createContext()

export const MovieContextProvider = (props) => {
    const [state] = useState([
        {
            id: 1,
            name: "Love in the Moonlight",
            slug: "love-in-the-moonlight",
            img: loveInTheMoonlight,
        },
        {
            id: 2,
            name: "Itaewon Class",
            slug: "itaewon-class",
            img: itaewon
        },
        {
            id: 3,
            name: "Descedants of the sun",
            slug: "descandants-of-the-sun",
            img: dSun
        },
        {
            id: 4,
            name: "Jumong",
            slug: "jumong",
            img: jumong
        },

    ],
    )
    let name, url, img
    function addMovie(){
        const id = state.length + 1
        const newMovie = {
            name: name,
            url: url,
            img: img,
            id: id
        }
        name = ""
        url =""
        img=""
        state.push(newMovie)
    }
    function movieName(event){
        console.log(state)
        name = event.target.value
    }
    function movieUrl(event){
        url = event.target.value
    }
    function movieImg(event){
        img = event.target.value
    }
    return (
        <MovieContext.Provider value={{
            movies:state,
            addMovie: addMovie,
            movieName: movieName,
            movieUrl: movieUrl,
            movieImg: movieImg,
            name: name,
            url: url,
            img: img,
        }}>
            {props.children}
        </MovieContext.Provider>
    );
}
