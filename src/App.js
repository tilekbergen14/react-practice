import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import EachTodo from "./components/EachTodo"
import {ContextProvider} from "./Context"
import {MovieContextProvider} from "./MovieContext"
import Movies from './components/Movies'
import Movie from "./components/Movie"

class App extends React.Component{
    render(){
        return(
                <ContextProvider>
                    <MovieContextProvider>
                    <div className="container">
                        <Navbar />
                        <Switch>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/todo" exact component={Todos}></Route>
                            <Route path="/todo/:id" exact component={EachTodo}></Route>
                            <Route path="/movies" exact component={Movies}></Route>
                            <Route path="/movies/:id" exact component={Movie}></Route>
                        </Switch>
                    </div>
                    </MovieContextProvider>
                </ContextProvider>
        )
    }
}

export default App