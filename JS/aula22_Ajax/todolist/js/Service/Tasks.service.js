import { createXMLHttpRequest } from "../createXMLHttpRequest.js"
import { createPromise } from "../createPromise.js"
import { Task } from "./../Model/Task.model.js"
import { urlTasks, urlUsers } from "../config.js"

export default class TasksService {

    constructor() {
        this.tasks = []
    }

    add(task, sucess, error, userId) {

        const fn = (_task) => {
            // const { title, completed, createdAt, updatedAt } = _task
            // this.tasks.push(new Task(title, completed, createdAt, updatedAt))
            this.getTasks(userId, sucess)
            // if (typeof sucess === "function") sucess()
        }
        createXMLHttpRequest("POST", `${urlUsers}/${userId}/tasks`, fn, error, JSON.stringify(task))

    }

    //"GET", `${urlUsers}/${userId}/tasks`, init
    getTasks(userId, sucess, error) {
        const fn = (arrTasks) => {
            // if (arrTasks.error){
            //     return alert(arrTasks.message)
            // }
            this.tasks = arrTasks.map(task => {
                const { title, completed, createdAt, updatedAt, id } = task
                return new Task(title, completed, createdAt, updatedAt, id)
            })
            if (typeof sucess === "function") sucess(this.tasks)
        }
        // createXMLHttpRequest("GET", `${urlUsers}/${userId}/tasks`, fn, error)
        createPromise("GET", `${urlUsers}/${userId}/tasks`).then(response => fn(response)).catch(erro => error(erro.message))
    }

    remove(id, sucess, error, userId) {
        this.tasks.updatedAt = Date.now()
        const fn = () => {
            this.getTasks(userId, sucess)
        }
        createXMLHttpRequest("DELETE", `${urlTasks}/${id}`, fn, error)
    }

    update(task, sucess, error, userId) {
        const fn = () => {
            this.getTasks(userId, sucess)
        }
        //console.log(JSON.stringify(task))
        createXMLHttpRequest("PATCH", `${urlTasks}/${task.id}`, fn, error, JSON.stringify(task))
    }

    getByid(id) {
        return this.tasks.find(task => parseInt(task.id) === id)
    }

    toggleDone(currentLiIndex) {
        this.tasks[currentLiIndex].toggleDone()
        return this.tasks[currentLiIndex]
    }
}