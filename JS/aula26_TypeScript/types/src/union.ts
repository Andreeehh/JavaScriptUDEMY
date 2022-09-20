function add2(x: number, y?: number) {
    if (y == undefined){
        return null
    }
    return x + y
}

const nu = 3
const un = undefined
const nu2 = 3
add2(nu, un)
add2(nu, nu2)

let teste3: number | string = 10
teste3 = 10
teste3 = "String"

const User: {
    nome: string,
    idade?: number
} = {
    nome: "André",
    idade: undefined // como não é obrigatório idade (?) aceita undefined, porem nao aceita null
}

