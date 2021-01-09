import React, {createContext} from "react"

export const MyContext = createContext()

export class ContextProvider extends React.Component{
    state = {
        todos: [
            {
                id: 1,
                task: "Today I should learn react",
                completed: false
            },
            {
                id: 2,
                task: "Watching movie with family",
                completed: false
            },
            {
                id: 3,
                task: "Watching love in the moonlight and Itaewon class",
                completed: false
            },
            {
                id: 4,
                task: "After dinner doing some workout",
                completed: true
            },
            {
                id: 5,
                task: "Reading book",
                completed: false
            }
        ]
    }
    clickHandler = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })})
    }
    onDelete = (id) => {
        const todos = [...this.state.todos]
        const updatedTodos = todos.filter(todo => todo.id !== id)
        this.setState({todos: updatedTodos})
    }
    render(){
        return (
            <MyContext.Provider value={{
                state: this.state,
                clickHandler: this.clickHandler,
                onDelete: this.onDelete
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
