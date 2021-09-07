import {MyMod2} from './mod2.js'

function myMod1() {
    console.log("myMod 1 executado")
    return "valor retornado de myMod1"
}

export function myMod1_nomeada() {
    return "funcao exportada nomeda"
}

export const PI = Math.PI

export const obj = {
    foo: true,
    bar: "ola mundo"
}

const nome = "André"
const idade = 26

export { nome, idade }//exportando propriedades, e não um objeto

console.log(new MyMod2())

export default myMod1