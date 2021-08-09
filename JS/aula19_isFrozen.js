const obj1 = {
    nome: "daniel"
}
const obj2 = {
    nome: "andré"
}

Object.defineProperty(obj2, "nome", {writable: false, configurable: false})
Object.preventExtensions(obj2)
Object.freeze(obj1)//mesma coisa que fazer as duas linhas acima
console.log(Object.isFrozen(obj1))//true
console.log(Object.isFrozen(obj2))//true