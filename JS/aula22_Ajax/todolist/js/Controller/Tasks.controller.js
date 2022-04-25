import { Task } from "../Model/Task.model.js"

export default class TasksController {
    constructor(service, view) {
        this.service = service
        this.view = view
    }

    add(title, userId) {
        this.service.add(new Task(title), () => this.view.render(this.service.tasks), userId)
    }

    remove(id, userId){
        this.service.remove(id, () => this.view.render(this.service.tasks), userId)
    }

    update(task, userId){
        task.updatedAt = Date.now()
        this.service.update(task, () => this.view.render(this.service.tasks), userId)
    }

    toggleDone(userId, currentLiIndex){
        // const task = this.service.getById(parseInt(id))
        // const {completed} = task
        // this.service.update({completed: !completed, id : parseInt(id)}, () => this.view.render(this.service.tasks), userId)
        this.service.update(this.service.toggleDone(currentLiIndex), () => this.view.render(this.service.tasks), userId)
    }
}