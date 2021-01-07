import React from "react"

class Todo extends React.Component{
    constructor(){
        super()
        this.state={
            completed: "true"
        }
    }
    render(){
        const completedStyle={
            textDecoration: "1px solid #f0f0f0 line-through",
            fontWeight: "Extra-light 200",
            color: "#fcefee",
        }
        return(
            <div className="todo">
                <p style={this.props.completed ? completedStyle : null} className="task">{this.props.task}</p>
                <i onClick={() => this.props.handler(this.props.id)} className='bx bxs-check-circle'></i>
                <i className='bx bxs-trash-alt' ></i>
            </div>
        )
    }   
}


export default Todo