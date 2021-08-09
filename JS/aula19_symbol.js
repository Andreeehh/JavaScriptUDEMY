const NOME = Symbol()
console.log(typeof NOME)
//gera uma chave única


let n = 0
const user = {
    ["teste" + (++n)]: "teste" + n,//método computed property name, onde fica dentro do [] um codigo javascript pra representar o nome da propriedade
    ["teste" + (++n)]: "teste" + n,
    ["teste" + (++n)]: "teste" + n,
    [NOME]: "com symbol",
    nome: "com string",
    3: "com numero"
}

user.nome = "nome alterado"
//questão de segurança, não consegue alterar a propriedade de nome comum
console.log(user)
console.log(user[NOME])
console.log("--------")
let teste = Object.getOwnPropertySymbols(user)//retorna os symbols do objeto em uma array
console.log(teste)//array com os symbols do objeto
console.log(teste[0])//symbol na posição inicial
console.log(user[teste[0]])//string do symbol
console.log(typeof user[teste[0]])//tipo string
user[teste[0]] = "nome alterado"//maneira de alterar por symbol
console.log(user)

