const mongoose = require("mongoose")
const Task = require("./../models/task.model")

const tasks = require('./../../data/tasks.json')

exports.get = (id) => {
    if (id) {
        return Task.findById(id)
    }
    return Task.find()
}

exports.post = (data) => {

    // const newData = {
    //     ...data,
    //     id: tasks[tasks.length - 1].id + 1
    // }
    const newData = { ...data }
    // tasks.push(newData)
    return Task.create(newData)
    // return newData
}

exports.put = (data, id) => {
    // const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
    // if (taskIndex < 0) {
    //     return null
    // }
    // tasks.splice(taskIndex, 1, data)
    // return data
    return Task.findOneAndUpdate({ _id: id }, data, { new: true })
}

exports.patch = (data, id) => {
    const { title, completed, userId } = data

    // const taskById = tasks.find(task => task.id === parseInt(id))

    // const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
    // if (taskIndex < 0) {
    //     return null
    // }

    const updatedAt = Date.now()

    const taskUpdated = { title, completed, userId, updatedAt }

    for (let prop in taskUpdated) {
        if (typeof taskUpdated[prop] === "undefined") delete taskUpdated[prop]
    }

    // const newTask = { ...taskById, ...taskUpdated }
    // tasks.splice(taskIndex, 1, newTask)
    // return newTask
    return Task.findOneAndUpdate({ _id: id }, taskUpdated, { new: true })

}

exports.delete = (id) => {
    // const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
    // if (taskIndex < 0) {
    //     return null
    // }

    // const deletedTask = tasks.splice(taskIndex, 1)

    // return deletedTask
    return Task.findOneAndRemove({ _id: id })
}