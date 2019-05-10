import React from 'react'

import {connect} from "react-redux";
import Todolist from "./Todolist";
import {changeTaskTextAC, addTasksT, getTasksT} from "../BLL/todolist-reducer";

let TodolistContainer = class extends React.Component {
    componentDidMount() {
        this.props.getTask()
    }

    render() {
       return <Todolist {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        tasks: state.todolist.tasks,
        newTaskText: state.todolist.newTaskText,
        status: state.todolist.status,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeTaskText: (newText) => {
            dispatch(changeTaskTextAC(newText))
        },
        addTask: (title) => {
            title ? dispatch(addTasksT(title)) : alert('Please input you task')

        },
        getTask:  () => {
            dispatch(getTasksT())
        }
    }
}


TodolistContainer = connect(mapStateToProps, mapDispatchToProps)(TodolistContainer);
export default TodolistContainer;