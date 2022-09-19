//create
//cria propriedades dos objetos, podendo modificar se é enumerável, configurável, rescrevível, e seu valor
const pai = {
    nome: "pai",
    falar: function(msg){
        console.log(`${this.nome} falou ${msg}`)
    }
}
const filho = Object.create({nome:"Filho"})

console.log(pai)//mostra as propriedades dentro de um objeto
console.log(filho)//mostra um objeto vazio com as propriedades dentro do __proto__
const filho2 = Object.create(pai, {nome:{value: "junior", enumerable:true}})//criando true para 
console.log(filho2)//mostra o objeto com a propriedade nome, e herda as propriedades do objeto passado como parametro em seu __proto__

//assign
//copia propriedades de objetos passados por parametro, para o primeiro objeto passado por parametro
const obj1 = {
    a: "a",
    b: "b",
    c: "c"
}

const obj2 = {
    b:"b2",
    d:"d2"
}
Object.defineProperties(obj2,{
    naoEnumeravel:{
        value: "não enumeravel"
    },
    Enumeravel:{
        value: "enumeravel",
        enumerable:true
    }
})

const clone = Object.assign({},obj1,obj2)//como os objetos tem propriedades com mesmo nome, mas valores diferentes, o objeto que for copiado por ultimo, ira reescrever a propriedade
const filha = Object.assign({},obj1,filho)//para evitar que propriedades novas sejam também adicionadas no método assign, deve-se passar um objeto vazio primeiro, pois ele recebera as propriedades iniciais de quando ele for criado
//const filha = Object.assign(obj1,filho)//copia propriedades enumeráveis do segundo objeto passado para o primeiro objeto passado
obj1.d = "d" //mesmo sendo criado depois, o método acima esta fazendo com que filha aponte para o obj1, portando o obj filha também vai adicionar a propriedade d
//também pode ser mesclado por spread operator, que também não passa propriedades não enumeráveis
const obj3 = {...obj1,...obj2}//propriedades iguais do obj2 vão sobreescrever os valores de obj1
const obj4 = {...obj2,...obj1}//propriedades iguais do obj1 vão sobreescrever os valores de obj2

//keys
//mostra apenas as propriedades enumeráveis
console.log(Object.keys(obj2))//nome das propriedades
console.log(Object.values(obj2))//valores das propriedades
console.log(Object.entries(obj2))//mostra um array com outras arrays para cada propriedade com a propriedade na primeira posição e o valor ela na segunda




