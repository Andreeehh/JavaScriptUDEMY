export interface Card {
    id: string,
    description: string,
    img: string,
}

const uniqueCards: Card[] = [
    { img: "01.png", description: "card 1", id: "card1" },
    { img: "02.jpg", description: "card 2", id: "card2" },
    { img: "03.jpg", description: "card 3", id: "card3" },
    { img: "04.png", description: "card 4", id: "card4" },
    { img: "05.png", description: "card 5", id: "card5" },
    { img: "06.jpg", description: "card 6", id: "card6" },
    { img: "07.jpg", description: "card 7", id: "card7" },
    { img: "08.jpg", description: "card 8", id: "card8" },
]

const cardsOriginais: Card[] = []

// cardsOriginais.push(uniqueCards[0])
// cardsOriginais.push(uniqueCards[0]) passa por referencia e teria o mesmo objeto 2 vezes

uniqueCards.forEach((card) => {
    cardsOriginais.push({ ...card })
    cardsOriginais.push({ ...card })
})

const cards: Card[] = []

//Minha resolução para sortear os cards
// while (cardsOriginais.length > 0) {
//     let n = Math.floor(Math.random() * (cardsOriginais.length - 1))
//     cards.push(cardsOriginais.splice(n, 1)[0])
// }


//Resolução do professor

function SuffleNumber(min:number, max:number){
    const n = Math.random() * (max - min + 1) + min
    return parseInt(n.toString())
}

const len = cardsOriginais.length

while(cards.length < len) {
    let suffled = SuffleNumber(0, cardsOriginais.length - 1)
    const item = cardsOriginais.splice(suffled, 1)
    cards.push(item[0])
}

export { cards }