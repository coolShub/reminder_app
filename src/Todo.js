import React from 'react'
import {List,ListItem,ListItemText} from '@material-ui/core'
import './Todo.css'
function Todo(props) {
    return (
        <div className="todo__list">
                <List>
                <ListItem>
                <ListItemText primary={props.text}/>
            </ListItem>

                </List>
            

        </div>
    )
}

export default Todo
