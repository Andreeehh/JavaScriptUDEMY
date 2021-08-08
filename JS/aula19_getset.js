let tipo = "-"

// const tiposPermitidos = {"mamifero": true, "anfibio": true, "reptil":true}
const tiposPermitidos = ["mamifero","anfibio","reptil"]

const cachorro = {
    name:"rex",
    get tipo(){
        return tipo
    },
    set tipo(_tipo){
        // if(tiposPermitidos[_tipo]){ padrão objeto
        if(tiposPermitidos.indexOf(_tipo) >= 0){//padrão array
            tipo = _tipo
        }
            
    }
}

console.log(cachorro)//mostra um objeto com name: "rex"
console.log(cachorro.tipo)//string vazia atribuida antes
cachorro.tipo = "mamifero"
console.log(cachorro.tipo)//retorna mamifero setado na linha anterior
cachorro.tipo = "teste"
console.log(cachorro.tipo)//retorna mamifero ainda, pois a linha anterior não passou na condição do objeto tiposPermitidos


//IIFE para evitar sujar escopo global
;(function(){
    let tipo = "-"

    // const tiposPermitidos = {"mamifero": true, "anfibio": true, "reptil":true}
    const tiposPermitidos = ["mamifero","anfibio","reptil"]

    const gato = {
        name:"mingau",
        get tipo(){
            return tipo
        },
        set tipo(_tipo){
        // if(tiposPermitidos[_tipo]){ padrão objeto
            if(tiposPermitidos.indexOf(_tipo) >= 0){//padrão array
                tipo = _tipo
            }
        }
    }

    this.gato = gato//como esta dentro de uma IIFE, adiciona ao window/node a propriedade gato que recebe o objeto gato dentro dessa função

})()