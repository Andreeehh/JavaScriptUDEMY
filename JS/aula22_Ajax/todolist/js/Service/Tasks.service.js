import { createFetch } from "../createFetch.js"
import { Task } from "./../Model/Task.model.js"
import { urlTasks, urlUsers } from "../config.js"

export default class TasksService {

    constructor() {
        this.tasks = []
    }

    add(task, sucess, error, userId) {
        createFetch("POST", `${urlUsers}/${userId}/tasks`, JSON.stringify(task))
            .then(() =>  this.getTasks(userId))
            .then(() => sucess())
            .catch(err => error(err))
    }

    getTasks(userId, sucess, error) {
        const fn = (arrTasks) => {
            this.tasks = arrTasks.map(task => {
                const { title, completed, createdAt, updatedAt, id } = task
                return new Task(title, completed, createdAt, updatedAt, id)
            })
            if (typeof sucess === "function") sucess(this.tasks)
            return this.tasks
        }
        return createFetch("GET", `${urlUsers}/${userId}/tasks`)
            .then(response => fn(response))
            .catch(erro => {
                if (typeof error === "function") {
                    return error(erro)
                }
                throw Error(erro.message)
            })
    }

    remove(id, sucess, error, userId) {
        this.tasks.updatedAt = Date.now()
        createFetch("DELETE", `${urlTasks}/${id}`)
            .then(() => this.getTasks(userId))
            .then(() => sucess())
            .catch(err => error(err.message))
    }

    update(task, sucess, error, userId) {
        createFetch("PATCH", `${urlTasks}/${task.id}`, JSON.stringify(task))
            .then(() => this.getTasks(userId))
            .then(() => sucess())
            .catch(err => error(err.message))
    }

    getByid(id) {
        return this.tasks.find(task => parseInt(task.id) === id)
    }

    toggleDone(currentLiIndex) {
        this.tasks[currentLiIndex].toggleDone()
        return this.tasks[currentLiIndex]
    }
}