const obj = {
    prop1: "prop 1",
    prop2: "prop 2"
}
//clonando as propriedades de obj em um novo objeto
const objFreeze = {...obj}
const objSeal = {...obj}
const objPrevent = {...obj}

Object.freeze(objFreeze)//não pode criar, nem atualizar e nem remover propriedades
objFreeze.prop3 = "teste"//não é possível
objFreeze.prop2 = "atualizado"//não é possível
delete objFreeze.prop1//não é possível
console.log(objFreeze)
Object.seal(objSeal)// não pode criar, pode atualizar, mas não pode remover propriedades
objSeal.prop3 = "teste"//não é possível
objSeal.prop2 = "atualizado"//é possível
delete objSeal.prop1//não é possível
console.log(objSeal)
Object.preventExtensions(objPrevent)// não pode criar, pode atualizar e pode remover
objPrevent.prop3 = "teste"//não é possível
objPrevent.prop2 = "atualizado"//é possível
delete objPrevent.prop1//é possível
console.log(objPrevent)