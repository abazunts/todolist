import React from 'react'
import {statuses} from "../BLL/todolist-reducer";
import style from './todolist.module.css'
import {NavLink} from "react-router-dom";

let todolist = (props) => {

    let {tasks = [], newTaskText, status} = props;
    let {addTask, changeTaskText} = props;

    let changeText = (e) => {
        changeTaskText(e.target.value)
    }

    let onKeyUp = (e) => {
        e.keyCode === 13 && addTask(e.target.value)
    }

    let onClick = () => {
       addTask(newTaskText)
    }

    return (
        <div className={style.todolist}>
            <input
                className={style.input} placeholder="Add new task" value={newTaskText} onChange={changeText}
                onKeyUp={onKeyUp} disabled={status === statuses.IN_PROGRESS}/>
            <button className={style.button} onClick={onClick}>Send</button>
            <div className={style.tasks}>
                <div>
                    {!tasks.length
                        ? <div className={style.title}>No tasks</div>
                        : tasks.map(t => <div className={style.title}><li>{t.title}</li></div>)}
                </div>
            </div>
            <div className={style.menu}>
                <NavLink activeClassName={style.active} to='/all'>All</NavLink>
                <NavLink  activeClassName={style.active} to='/active'>Active</NavLink>
                <NavLink activeClassName={style.active} to='/completed'>Completed</NavLink>
            </div>
            <div className={style.status}>
                {status === statuses.IN_PROGRESS
                    && <img src='http://techinghanaconference.com/images/preloader2.gif'/>}
            </div>
        </div>
    )
}

export default todolist;