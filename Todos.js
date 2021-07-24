import React from 'react'
import { TodoItem } from '../MYComponents/TodoItem';

export const Todos = (props) => {
    let myStyle = {
        minHight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className= "container" style= {myStyle}>
            <h3 className="my-3"> Todos List</h3>
            {props.todos.length===0? "No todos to Display":
             props.todos.map((todo)=>{
                return(
                    <>
                     <TodoItem todo={todo} onDelete={props.onDelete}/> <hr/>
                </>
                )
            })
              }


        </div>
    )
}
