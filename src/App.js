import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import EachTodo from "./components/EachTodo"
import {ContextProvider} from "./Context"
class App extends React.Component{
    render(){
        return(
                <ContextProvider>
                    <div className="container">
                    <Navbar />
                        <Switch>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/todo" exact component={Todos}></Route>
                            <Route path="/todo/:id" exact component={EachTodo}></Route>
                        </Switch>
                    </div>
                </ContextProvider>
        )
    }
}

export default App