const repository = require("./../repository/tasks.repository")

exports.get = async (req, res) => {
    try {
        let tasks = await repository.get()
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send({
            message: "error 500", err: e
        })
    }
}

exports.post = async (req, res) => {
    const { title, userId } = req.body

    if (!title || !userId || isNaN(userId)){
        res.status(400).send({
            message: "error 400", err: "Requisição invialida"
        }).end()
        return
    }

    const newTask = {
        title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
        userId
    }

    try {
        const data = await repository.post(newTask)
        res.status(201).send(data)
    } catch (error) {
        res.status(500).send({
            message: "error 500", err: e
        })
    }
}

exports.getById = async (req, res) => {
    try {
        const data = await repository.get(req.params.id)
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(404).end()
        }
    } catch (error) {
        res.status(500).send({
            message: "error 500", err: e
        })
    }

}

exports.put = async (req, res) => {
    const { title, completed, createdAt, updatedAt, id, userId } = req.body
    const newTask = { title, completed, createdAt, updatedAt, id: id || req.params.id, userId }

    const values = Object.values(newTask)

    if (values.some( v => v === undefined)){
        res.status(400).send({
            message: "error 400", err: "Requisição invialida"
        }).end()
        return
    }
    try {
        const data = await repository.put(req.params.id, newTask)
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(404).end()
        }
    } catch (error) {
        res.status(500).send({
            message: "error 500", err: e
        })
    }
}

exports.patch = async (req, res) => {
    try {
        const data = await repository.patch(req.body, req.params.id)
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(404).end()
        }
    } catch (error) {
        res.status(500).send({
            message: "error 500", err: e
        })
    }
}

exports.delete = async (req, res) => {
    try {
        const deletedTask = await repository.delete(req.params.id)
        if (deletedTask) {
            res.status(200).send(deletedTask)
        } else {
            res.status(404).end()
        }
    } catch (error) {
        res.status(500).send({
            message: "error 500", err: e
        })
    }
}