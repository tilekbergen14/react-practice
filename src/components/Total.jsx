import React from 'react';
import {MyContext} from "../Context"

class Total extends React.Component{
    render(){
        return(
            <React.Fragment>
                <MyContext.Consumer>
                    {context => {
                        const unCompleted = context.state.todos.filter(todo => todo.completed === false).length
                        const completed = context.state.todos.filter(todo => todo.completed === true).length
                        return(
                            <React.Fragment>
                                <h4 style={{flex: 1, color: 'yellow'}}>
                                    You have {unCompleted} task todo</h4>
                                <h4 style={{color: "blue"}}>You've completed {completed} task for now</h4>
                            </React.Fragment>
                        )
                    }}
                </MyContext.Consumer>
            </React.Fragment>
        )
    }
}

export default Total