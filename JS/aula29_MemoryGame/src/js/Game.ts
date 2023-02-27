import { Card } from "./Card";

export class Game {
    constructor(private dom: HTMLDivElement, private cards: Card[]) {

    }
    
    // Minha resolução
    // addListeners() {
    //     let firstCardClicked: Card = {
    //         id: "0",
    //         description: "",
    //         img: ""
    //     }
    //     let secondCardClicked: Card = {
    //         id: "0",
    //         description: "",
    //         img: ""
    //     }
    //     const dom = this.dom
    //     Array.from(dom.querySelectorAll('[data-card]')).forEach((card, i) => {
    //         card.addEventListener("click", e => {
    //             const cardClicked = e.currentTarget as HTMLDivElement
    //             const cardClass = cardClicked.getAttribute("class") as string
    //             if (cardClass != ("card show")) {
    //                 cardClicked.classList.add("show")
    //                 const id = cardClicked.getAttribute("data-card") as string
    //                 if (parseInt(firstCardClicked.id) == 0) {
    //                     firstCardClicked = {
    //                         id: id,
    //                         description: "",
    //                         img: ""
    //                     }
    //                 } else {
    //                     secondCardClicked = {
    //                         id: id,
    //                         description: "",
    //                         img: ""
    //                     }
    //                     if (firstCardClicked.id != secondCardClicked.id) {
    //                         console.log("diferentes")
    //                         setTimeout(function () {
    //                             Array.from(dom.querySelectorAll('[data-card]')).forEach((card, i) => {
    //                                 const cardId = card.getAttribute("data-card") as string
    //                                 if (cardId == firstCardClicked.id || cardId == secondCardClicked.id) {
    //                                     card.classList.remove("show")
    //                                 }
    //                             })

    //                             firstCardClicked.id = "0"
    //                             secondCardClicked.id = "0"
    //                         }, 1000)
    //                     } else {
    //                         firstCardClicked.id = "0"
    //                         secondCardClicked.id = "0"
    //                     }
    //                 }
    //             }

    //         })
    //     })
    // }

    //Res do prof

    private firstCard: HTMLDivElement | null = null
    private secondCard: HTMLDivElement | null = null

    addListeners() {
        Array.from(this.dom.querySelectorAll('[data-card]')).forEach((card, i) => {
            card.addEventListener("click", e => {
                if (
                    this.firstCard === e.currentTarget ||
                    this.secondCard === e.currentTarget ||
                    (e.currentTarget as HTMLDivElement).classList.contains("show")) return
                if (!this.firstCard){
                    this.firstCard = e.currentTarget as HTMLDivElement
                    this.firstCard.classList.add("show")
                } else if(!this.secondCard) {
                    this.secondCard = e.currentTarget as HTMLDivElement
                    this.secondCard.classList.add("show")

                    if (this.firstCard.getAttribute("data-card") === this.secondCard.getAttribute("data-card")){
                        this.firstCard = null
                        this.secondCard = null
                    } else {
                        setTimeout(this.reset.bind(this), 2000)//bind para a função reset passar o this do game
                    }
                }
                
            })
        })
    }

    reset(){
        this.firstCard?.classList.remove("show")
        this.secondCard?.classList.remove("show")
        this.firstCard = null
        this.secondCard = null
    }





    init() {
        console.log("init chamado")
        this.dom.innerHTML = `
            ${this.cards.map(card => (
            `
                    <div class="card" data-card="${card.id}">
                        <img src="img/${card.img}" class="card-front" alt="${card.id}">
                        <img src="img/back.png" class="card-back" "alt="Memory card">
                    </div>
                `
        )).join('')}
        `
        this.addListeners()
    }
}