const pai = {
    nome: "pai",
    falar: function(msg){
        console.log(`${this.nome} falou ${msg}`)
    }
}
const filho = Object.create({nome:"Filho"})

console.log(pai)//mostra as propriedades dentro de um objeto
console.log(filho)//mostra um objeto vazio com as propriedades dentro do __proto__