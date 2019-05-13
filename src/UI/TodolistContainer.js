import React from 'react'

import {connect} from "react-redux";
import Todolist from "./Todolist";
import {changeTaskText, addTask, getTasks, setFilter, toggleSortDirection} from "../BLL/todolist-reducer";
import {getFilteredTasks, getSortDirection, getSortField} from "../BLL/selectors";

let TodolistContainer = class extends React.Component {
    componentDidMount() {
        this.props.getTasks()
    }

    render() {
       return <Todolist {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        tasks:  getFilteredTasks(state),
        newTaskText: state.todolist.newTaskText,
        status: state.todolist.status,
        sortDirection: getSortDirection(state),
        sortField: getSortField(state)
    }
}




TodolistContainer = connect(mapStateToProps, { changeTaskText, addTask, getTasks, setFilter, toggleSortDirection })(TodolistContainer);
export default TodolistContainer;