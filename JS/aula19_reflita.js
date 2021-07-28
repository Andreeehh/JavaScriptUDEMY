function Animal(tipo) {
    if (tipo){ 
        console.log("entrou")
        this.tipo = tipo
    }
}
 
Animal.prototype.obterTipo = function () {
    return this.tipo
}
 
let sapo = {tipo: "anfibio"}
Animal.prototype.obterTipo.call(sapo)
let aux = new Animal()
console.log(aux.obterTipo())