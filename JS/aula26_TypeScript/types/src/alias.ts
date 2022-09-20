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

type testeAlias = number | string

let teste3: number | string = 10
teste3 = 10
teste3 = "String"

let teste4: testeAlias
teste4 = 10
teste4 = "String"

type User = {
    nome: string,
    idade?: number
}

const andre: {
    nome: string,
    idade?: number
} = {
    nome: "André",
    idade: undefined // como não é obrigatório idade (?) aceita undefined, porem nao aceita null
}
const maria: User = {
    nome: "Maria",
    idade: 25 // como não é obrigatório idade (?) aceita undefined, porem nao aceita null
}

type Sizes = "12px" | "18px" | "24px"

const small: Sizes = "12px"
const normal: Sizes = "18px"
const large: Sizes = "24px"


export default 1
