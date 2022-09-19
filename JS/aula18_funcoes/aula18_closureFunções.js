const teste = (function(){
    return "meu retorno"
})()

console.log(teste)

const teste2 = (function(){
    let n = 0
    return function testeInterno(){
        console.log("testeInterno chamado", ++n)
        return "retorno de testeInterno " + n
    }
})()

console.log(teste2)
let str = teste2()
teste2()
teste2()
let str2 = teste2()
console.log(str)
console.log(str2)   

//conceito de closure é quando uma função com uma variável, ou parametro, que tem uma função interna, a variável ou parametro é lembrada sempre ao executar novamente a função interna
//ou seja, tod vez que chavar a função, no caso acima, a variável vai aumentar o valor no ++n, e não será esquecida 