const str = "global string"

function teste(){
    console.log("-------- this de teste")
    console.log(this)
    console.log(str)

    setTimeout(function(){
        console.log("---------- this dentro do timeout")
        console.log(this)//this sofre alteração quando chamado de uma função global
    },1000)

    setTimeout(() => {
        console.log("---------- this dentro do timeout Arrow function")
        console.log(this)//this volta a ser o objeto obj que atribuiu a função teste a um atributo de nome teste, usando a arrow function
    }, 2000)
}

//teste() //quando chamada pelo escopo global, o this será o próprio objeto global
const obj = {
    foo: "bar",
    teste: teste //atributo do objeto com nome teste recebe a função teste, ECMA SCRIPT 15 teste: teste pode ser substituido somente por teste, pois o nome da propriedade é igual seu valor
    
}
obj.teste() //quando chamada sendo um atributo do objeto criado, o this sera o objeto criado a qual a função esta atribuida

const teste2 = () => {
    console.log("Arrow function")
    console.log(this)//na arrow function o this ainda é o objeto anterior, nesse caso o objeto global, window
}


//teste2()