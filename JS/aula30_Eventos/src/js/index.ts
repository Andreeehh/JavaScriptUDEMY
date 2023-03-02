import { PubSub, Output } from "./PubSub"

const testEvent1 = document.querySelector("#testEvent") as HTMLElement
const testEvent2 = document.querySelector("#testEvent2") as HTMLElement
const testEvent3 = document.querySelector("#testEvent3") as HTMLElement

type EventFire = (this: HTMLElement | Document, e: MouseEvent) => void

const eventFire: EventFire = function (evt: MouseEvent) {
    // console.log("eventFired")
    // console.log(evt)
    // console.log(this)
    const currentTarget = evt.currentTarget as HTMLElement // garante que nao vai ser null
    const quantity = this.querySelector("span") as HTMLSpanElement
    const n = parseInt(quantity.textContent || "0")
    quantity.textContent = (n + 1).toString()

    if (this !== testEvent2 && this !== document) {
        const event = new Event("customclick")
        testEvent2.dispatchEvent(event)

        const event2 = new CustomEvent("customEvent", {
            detail: n + 1
        })
        testEvent3.dispatchEvent(event2)
    }

}

testEvent1.addEventListener("click", eventFire)
testEvent2.addEventListener("customclick", eventFire as EventListener)
testEvent3.addEventListener("customEvent", function (e) {
    console.log(e)
})

document.addEventListener("click", eventFire) //seleciona a primeira span do documento

// Pub sub Design Pattern

const pubsub = document.getElementById("pubsub") as HTMLElement

PubSub.subscribe("EventTest", function (data) {
    console.log("teste chamado")
    console.log(data)
    pubsub.textContent = `data: ${data?.data} - type: ${data?.type}`
})

PubSub.subscribe("EventTest", function (n) {
    console.log("teste chamado2")
    console.log(n)
})

function teste(data?: Output){
    console.log("teste", data)
}

PubSub.subscribe("EventTest1", teste)
PubSub.subscribe("EventTest2", teste)
PubSub.subscribe("EventTest3", obj => {
    console.log("obj?.data, obj?.type")
    console.log(obj?.data, obj?.type)
})
PubSub.unSubscribe("EventTest2", teste) // desescreve a primeira ocorrência da função passada por parametro

console.log(PubSub.subscribers)


PubSub.publish("EventTest", "Ola mundo")

setTimeout(() => {
    PubSub.publish("EventTest", "Publish com timeout")
}, 3000)