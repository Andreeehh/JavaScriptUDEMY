const testEvent1 = document.querySelector("#testEvent") as HTMLElement
const testEvent2 = document.querySelector("#testEvent2") as HTMLElement
const testEvent3 = document.querySelector("#testEvent3") as HTMLElement

type EventFire = (this: HTMLElement | Document, e: MouseEvent) => void

const eventFire : EventFire = function(evt: MouseEvent){
    // console.log("eventFired")
    // console.log(evt)
    // console.log(this)
    const currentTarget = evt.currentTarget as HTMLElement // garante que nao vai ser null
    const quantity = this.querySelector("span") as HTMLSpanElement
    const n = parseInt(quantity.textContent || "0")
    quantity.textContent = (n + 1).toString()
    
    if(this !== testEvent2 && this !== document){
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
testEvent3.addEventListener("customEvent", function(e){
    console.log(e)
})

document.addEventListener("click", eventFire) //seleciona a primeira span do documento