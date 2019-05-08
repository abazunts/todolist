import apiService from "../DAL/todolistAPI";

const ADD_TASK = 'TODOLIST/TODOLIST/ADD_TASK';
const ADD_NEW_TASK_TEXT = 'TODOLIST/TODOLIST/ADD_NEW_TASK_TEXT';
const SET_TASKS = 'TODOLIST/TODOLIST/SET_TASKS';
const SET_STATUS = 'TODOLIST/TODOLIST/SET_STATUS';

export let statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    IN_PROGRESS: 'IN_PROGRESS',
    SUCCESS: 'SUCCESS'

}

let initialState = {
    tasks: [],
    newTaskText: '',
    status: statuses.NOT_INITIALIZED,
}

let TodolistReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, action.newTask],
            }
        }
        case ADD_NEW_TASK_TEXT: {
            return {
                ...state,
                newTaskText: action.newText
            }
        }
        case SET_TASKS: {
            return {
                ...state,
                tasks: [...action.tasks]
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;

    }
}

export let addTaskAC = (newTask) => ({type: ADD_TASK, newTask});
export let changeTaskTextAC = (newText) => ({type: ADD_NEW_TASK_TEXT, newText});
export let setTasksAC = (tasks) => ({type: SET_TASKS, tasks});
export let setStatusAC = (status) => ({type: SET_STATUS, status})

export let  getTasksT = () => (dispatch) => {
    dispatch(setStatusAC(statuses.IN_PROGRESS))
    apiService.getTask()
        .then(tasks => {
            dispatch(setTasksAC(tasks))
            dispatch(setStatusAC(statuses.SUCCESS))
        })
}

export let addTasksT = (title) => (dispatch) => {
    dispatch(setStatusAC(statuses.IN_PROGRESS))
    apiService.setTask(title).then(task => {
            dispatch(addTaskAC(task))
            dispatch(setStatusAC(statuses.SUCCESS))
            dispatch(changeTaskTextAC(''))
        })
}

export default TodolistReducer;
