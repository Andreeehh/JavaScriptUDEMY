interface Action<T = string> { //funciona igual para type
    action: T
}

const step1: Action<number> = {
    action: 0
}

step1.action = 2
// step.action = "2" erro

const step2: Action<boolean> = {
    action: false
}

step2.action = true

const step3: Action = { //default setado para = string
    action: "false"
}

step3.action = "true"

type NumberOrString = number | string

type ActionT<T extends NumberOrString = string, U = number> = { //extends restringe ao uso e = seta default
    action: T,
    timeStamp: U
}

const step4: ActionT = {
    action: "delete",
    timeStamp: 123
}

const historyActions: Array<ActionT> = []

const addAction = <T extends ActionT & {id: number}>(obj: T) => { //tipo T tem pelo menos as propriedades do ActionT
    const result = {
        ...obj,
        _id: obj.id + "_" +obj.timeStamp
    }
    historyActions.push(result)
}
addAction({
    action: "delete",
    timeStamp: 123,
    id: 4
})//função consegue aplicar o mesmo push da de baixo só que com tipo de action diferente
historyActions.push({
    action: "delete",
    timeStamp: 123//,
    // time: 4
})
console.log(historyActions)

export default 1