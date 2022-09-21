function somaOuConcatena(x: number | string, y: number | string) {
    return (typeof x === "number" && typeof y === "number") ? x + y : x + "" + y
}

console.log(somaOuConcatena(1, 2))
console.log(somaOuConcatena("1", "2"))
console.log(somaOuConcatena(1, "2"))

type NumberOrString = number | string

function somaOuConcatenaG<T extends NumberOrString>(x: T, y: T) {
    return (typeof x === "number" && typeof y === "number") ? x + y : x + "" + y
}


console.log(somaOuConcatenaG(1, 2))
console.log(somaOuConcatenaG("1", "2"))
// console.log(somaOuConcatenaG(1, "2")) fornece erro
// console.log(somaOuConcatenaG(true, false)) fornece erro somente quando adicionado o extends
