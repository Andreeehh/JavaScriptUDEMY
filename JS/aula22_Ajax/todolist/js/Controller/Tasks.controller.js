import { Task } from "../Model/Task.model.js"
import { userId } from "./../config.js"

export default class TasksController {
    constructor(service, view) {
        this.service = service
        this.view = view
    }

    add(title) {
        this.service.add(new Task(title), () => this.view.render(this.service.tasks), 
        (erro) => alert(erro), userId)
    }

    remove(id){
        this.service.remove(id, () => this.view.render(this.service.tasks), 
        (erro) => alert(erro), userId)
    }

    update(task){
        task.updatedAt = Date.now()
        this.service.update(task, () => this.view.render(this.service.tasks), 
        (erro) => alert(erro), userId)
    }

    toggleDone( currentLiIndex){
        // const task = this.service.getById(parseInt(id))
        // const {completed} = task
        // this.service.update({completed: !completed, id : parseInt(id)}, () => this.view.render(this.service.tasks), userId)
        let task = this.service.toggleDone(currentLiIndex)
        this.service.update(task, () => this.view.render(this.service.tasks), 
        (erro) => alert(erro), userId)
    }

    getTasks(){
        this.service.getTasks(
            userId,
            () => this.view.render(this.service.tasks), 
            (erro) => alert(erro)
            )
    }
}