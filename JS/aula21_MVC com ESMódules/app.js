import abacaxi, { myMod1_nomeada, PI, obj, nome, idade } from './modules/mod1.js' //quando exportada como default, pode utilizar qualquer nome a função exportada, caso a função ja foi nomeada, ela tem q ser exportada igual entre chaves


const myMod = abacaxi()
console.log("app rodando", myMod, myMod1_nomeada(), PI, obj, obj.foo, obj.bar, nome, idade)


