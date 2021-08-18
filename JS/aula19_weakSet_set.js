const _set = new Set()
const _weakSet = new WeakSet()

const arr = [1,2,3,4,2,3,5]

_set.add(1)
_set.add(5)
_set.add(7)
_set.add(2)
_set.add(6)

console.log(_set.size)//mostra o tamanho de elementos unicos
console.log(_set.has(6))//booleno se existe elemento passado por parametro
_set.delete(6)//deleta o número 6 da array
console.log(_set.size)
console.log(_set.has(6))
console.log("-------", "loop dos valores")
for(let el of _set){//loop for of faz interação em cima dos valores
    console.log(el)
}
console.log("-------","loop das keys" )
for(let el of _set.keys()){
    console.log(el)
}
console.log("-------","loop dos values" )
for(let el of _set.values()){
    console.log(el)
}
//não é possível colocar valores primitivos dentro do weakSet, ex.: _weakSet.add(2), _weakSet.add("string")
let obj2 = {}
;(function(){
    let obj1 = {foo: "bar"}
    let obj2 = {foo2: "bar2"}
    _set.add(obj1)
    _weakSet.add(obj2)
})()


for(let el of _set){
    console.log(el)
}

//não é possível loop for of do weakSet
// for(let el of _weakSet){
//     console.log(el)
// }

//weakset só possúi add, delete e has
console.log(_weakSet.has(obj2))//depois da função auto invocável, o weakSet esta pronto para ser limpo, pois ele não esta mais sendo utilizado, portanto retorna falso