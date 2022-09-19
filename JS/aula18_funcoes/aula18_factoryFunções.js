function criarCachorro(nome){
    let posicao = 0
    return{
        nome,
        latir(){
            console.log(this.nome, "Está latindo")
        },
        andar(distancia){
            posicao += distancia
            console.log(this.nome, "andou", distancia,"m")
        },
        get pegaPosicao(){
            console.log(`a posicao de ${this.nome} é  ${posicao}`)
            return posicao
        }
    }
}

const rex = criarCachorro("rex")
rex.andar(10)
rex.andar(5)
console.log(rex.pegaPosicao)

const toto = criarCachorro("Totó")
toto.andar(20)
toto.andar(-3)
toto.andar(-17)
console.log(toto.pegaPosicao)

//Objeto é criar uma função que retorna um objeto que pode ser utilizado para várias constates/variaveis com as mesmas propriedades
//para utilizar o return de uma função como propriedade, utilizar a palavra get antes da função/propriedade



