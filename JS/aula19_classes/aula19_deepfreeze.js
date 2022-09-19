const obj1 = {
    foo:"bar",
    internalProp:{}
}
Object.freeze(obj1)
//Object.freeze(obj1.internalProp)//assim vc consegue proteger o objeto de internalProp
obj1.foo = "alterado"
// console.log(obj1)//permanece inalterado

obj1.internalProp.foo = "bar 2"
// console.log(obj1)//consegue ser alterados propriedades internas

obj1.internalProp = {teste: "teste"}
// console.log(obj1)//não consegue alterar
//função autoinvocável para fazer freeze de todos os objetos internos

function deepFreeze(obj){
    const propNames = Object.getOwnPropertyNames(obj)//retorna todas as propriedades, inclusive as não numeráveis

    propNames.forEach(name => {
        let prop = obj[name]

        if(typeof prop === 'object' && prop !== null ){
            deepFreeze(obj)
        }
    })

    return Object.freeze(obj)
}
// function deepFreeze(obj) {
//     const propNames = Object.getOwnPropertyNames(obj)

//     propNames.forEach(name => {
//         let prop = obj[name]

//         if (typeof prop === "object" && prop !== null) {
//             deepFreeze(obj)
//        } 
//     })

//     return Object.freeze(obj)
// }

const obj2 = {
    foo: "bar",
    internalProp: {
        array:[1,2,3],
        internalObject: {teste:"teste"}
    }
}

deepFreeze(obj2)
obj2.foo = "alterado"//não irá alterar
// obj2.internalProp.array.push("alterado")//error
obj2.internalProp.internalObject.teste = "alterado"//não irá alterar
console.log(obj2)