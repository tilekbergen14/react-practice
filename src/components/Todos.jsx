import React, {useContext} from "react"
import Todo from "./Todo"
import {MyContext} from "../Context"

class Todos extends React.Component{
    render(){
        return(
            <React.Fragment>
                <MyContext.Consumer>
                    {context => {
                        const todo = context.state.todos.map(eachTodo => {
                            return <Todo id={eachTodo.id} completed={eachTodo.completed} task={eachTodo.task} 
                            key={eachTodo.id} 
                            handler={context.clickHandler}
                            onDelete={context.onDelete}
                            />
                         })
                         return(
                            <div>
                                {todo}
                            </div>
                        )
                    }}
                </MyContext.Consumer>
            </React.Fragment>
        )
    }
}

export default Todos