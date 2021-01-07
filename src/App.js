import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Todo from "./components/Todo"
import Todos from "./data"
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: Todos
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(id){
        this.setState(prevTodo => {
            const updatedTodo = prevTodo.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                console.log(todo)
                return todo
            })
            return updatedTodo
        })
    }

    render(){
        const todo = this.state.todos.map(eachTodo => {
            return <Todo id={eachTodo.id} completed={eachTodo.completed} task={eachTodo.task} 
            key={eachTodo.id} 
            handler={this.clickHandler}/>
        })
        return(
            <div className="container">
                <Navbar />
                <div className="todo-box">
                    {todo}
                </div>
            </div>
        )
    }
}

export default App