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

    ])
    return (
        <MovieContext.Provider value={{
            movies:state }}>
            {props.children}
        </MovieContext.Provider>
    );
}

