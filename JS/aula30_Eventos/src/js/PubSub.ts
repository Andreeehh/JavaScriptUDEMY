type CallBack = (data?: Output) => void

export type Output = {
    data: any,
    type: string
}

type Subscribers = {
    [P in string]: CallBack[]//as propriedades sao string e o valor é um array de callback
}

export class PubSub {
    static subscribers: Subscribers = {}

    static subscribe(eventName: string, fn: CallBack) {
        PubSub.subscribers[eventName] = PubSub.subscribers[eventName] || []
        PubSub.subscribers[eventName].push(fn)
    }

    static publish(eventName: string, data: any) {
        if (PubSub.subscribers[eventName]) {
            PubSub.subscribers[eventName].forEach((fn: CallBack) => {
                const output: Output = { data, type: eventName }
                fn(output)
            });
        }
    }

    static unSubscribe(eventName: string, fn: CallBack) {
        if (PubSub.subscribers[eventName]) {
            const index = PubSub.subscribers[eventName].findIndex((element: Function) => element === fn)
            if (index > -1) {
                PubSub.subscribers[eventName].splice(index, 1)

                if (PubSub.subscribers[eventName].length === 0) {
                    delete PubSub.subscribers[eventName]
                }
            }
        }
    }
}

// Cria uma estrutura que se asemelharia a esta
// btn1.addEventListener("click", function(){})
// btn1.addEventListener("click", function(){})

// events = {
//     click: [
//         function(){},
//         function(){},
//     ]
// }