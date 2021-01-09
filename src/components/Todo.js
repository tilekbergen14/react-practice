import React from "react"
import {Link} from "react-router-dom"
import Total from "./Total"
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
            fontStyle: "italic"
        }
        return(
            <div className="todo">
                <p style={this.props.completed ? completedStyle : null} className="task"><Link to={`/todo/${this.props.id}`}>{this.props.task}</Link></p>
                <i onClick={() => this.props.handler(this.props.id)} className='bx bxs-check-circle'></i>
                <i onClick={() => this.props.onDelete(this.props.id)} className='bx bxs-trash-alt' ></i>
                <div className="total">
                            <Total />
                            {console.log(this.props.params)}
                        </div>
            </div>
        )
    }   
}


export default Todo