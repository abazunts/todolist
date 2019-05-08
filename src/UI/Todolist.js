import React from 'react'
import {statuses} from "../BLL/todolist-reducer";
import style from './todolist.module.css'

let todolist = (props) => {

    let {tasks =[], newTaskText,status} = props;
    let changeTaskText = (e) => {
        props.changeTaskText(e.target.value)
    }


    let onKeyUp = (e) => {
        e.keyCode === 13 && props.addTask(e.target.value)
    }

    return (
        <div className={style.todolist}>

            <div>
            <input className={style.input} placeholder='Add new task' value={newTaskText} onChange={changeTaskText} onKeyUp={onKeyUp} disabled={status === statuses.IN_PROGRESS}/>
            </div>
            {!tasks.length ? <div>No tasks</div> : tasks.map(t => <div className={style.title}>{t.title}</div>)}
            <div>
                {status}
            </div>


        </div>
    )
}

export default todolist;