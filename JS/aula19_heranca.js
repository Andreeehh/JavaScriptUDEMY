//Herança na maneira mais aintiga
function Animal(tipo){
    if (tipo) this.tipo = tipo  //caso exista tipo, passar para a propriedade this.tipo, caso não, ela sera vazia  
}
Animal.prototype.obterTipo = function (){
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"

function Cachorro(nome, tipo){
    this.nome = nome
    Animal.call(this, tipo)
    //this.constructor = Cachorro//mesma linha de construção que a de baixo, entretanto não se pode edixar a propriedade mostrada dentro do for in, linha 36
    Object.defineProperty(Cachorro.prototype, "constructor", {
        value: Cachorro,
        enumerable: false//propriedade que mostra(true) ou não mostra no for in
    })
}
//antes de atribuir o prototype, Cachorro.__proto__ é o objeto global
Cachorro.prototype = new Animal()
//atribuiu o objeto Animal() ao cachorro.__proto__

/*
Melhor método de se colocar um construtor é colcoando logo após a função e fora dela
function Cachorro(nome, tipo) {
    this.nome = nome
    Animal.call(this, tipo)
}
Cachorro.prototype = new Animal()
Cachorro.prototype.constructor = Cachorro 
*/

let rex = new Cachorro("Rex", "Mamifero")

console.log(rex)
console.log(rex.constructor)
console.log(rex.__proto__)
console.log(rex.obterTipo())

for(let prop in rex){//loop rodando a variável prop que recebe as propriedades do objeto da variável rex
    console.log(prop)//mostra também as propriedades vindas da cadeia de protótipos
}


for(let prop in rex){
    if(rex.hasOwnProperty(prop))//pergunta se o prop é da própria do objeto, não considerando a cadeia de protótipos
        console.log(prop)//não mostra as propriedades vindas da cadeia de protótipos
}

console.log(rex instanceof Animal)//instanceof pergunta se faz parte da mesma cadeia de prototypo,verdadeiro, contem os propriedades dele proprio e das cadeias acima
console.log(Cachorro.prototype.isPrototypeOf(rex))//mesma pergunta do instaceof , verdadeiro
console.log(rex instanceof Cachorro)//verdadeiro
console.log(rex instanceof Object)//verdadeiro, objeto global
console.log(rex instanceof Array)//falso, não contem as propriedades de uma array
console.log(Array.prototype.isPrototypeOf(rex))//falso, igual acima
console.log(Object.getPrototypeOf(rex))//retorna Animal{}, pois é o prototipo atribuido ao rex, q é do tipo cachorro, linha 17, igual linha 24


