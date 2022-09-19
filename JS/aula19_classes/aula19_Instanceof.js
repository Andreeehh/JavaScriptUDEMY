let n = 10
let nObj = new Number(10)
console.log(n.constructor)//Classe number e suas funções
console.log(nObj.constructor)//Classe number e suas funções
console.log("------------")
console.log(n instanceof Number)//apesar de ter sua classe igual a Number, valores primitivos retornam false quando olha com instaceof
console.log(typeof n === "number")//type of funciona para valores primitivos
console.log(n instanceof Number || typeof n === "number")//true
console.log(nObj instanceof Number)//true
console.log("------------")
const arr1 = []
const arr2 = new Array()
console.log(arr1 instanceof Array)//true, não é um valor primitivo
console.log(arr2 instanceof Array)//true

console.log("------------") 

const regex1 = /a/g
const regex2 = RegExp()
console.log(regex1 instanceof RegExp)//true
console.log(regex2 instanceof RegExp)//true

console.log("------------") 

console.log(typeof function (){})//função
const fn = () => {}
console.log(typeof fn === "function")//true
console.log("------------") 
console.log(function(){} instanceof Function)//true
console.log(fn instanceof Function)//true