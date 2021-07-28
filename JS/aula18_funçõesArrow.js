function teste(){
    console.log("function expression teste")
    return "fn expression"
}//função normal pode ser criada em qualquer lugar, pois é hostiada

const t1 = teste()
console.log(t1)

//arrow functions não são hostiadas, portanto só poder ser chamadas depois de serem criadas, sintaxe padrão "função(parametros) => {código da função}"

const testArrow = () => {
    console.log("Arrow function teste")
    return "arrow fn"
}
const t2 = testArrow()
console.log(t2)

const testArrowParametro = (str) => {
    console.log("Arrow function teste - ", str)
    return "arrow fn - " + str
}

const t3 = testArrowParametro("Parametro")
console.log(t3)

const testArrowUmaLinha = str => "arrow fn com uma linha sem chaves - " + str
const t4 = testArrowUmaLinha("Parametro")
console.log(t4) 

const testArrowObjeto = () => {
    console.log("Arrow com Objeto")
    return {
        foo: "bar"
    }
}

const t5 = testArrowObjeto()
console.log(t5)
console.log(t5.foo)
console.log(t5["foo"])

const testArrowObjetoUmaLinha = str => ({boo: str, bee: "str"})
const t6 = testArrowObjetoUmaLinha("bar")
console.log(t6)
console.log(t6.boo)
console.log(t6.bee)

