function Cachorro(name){
    let posicao = 0
    
    this.name = name

    this.latir = function(){
        console.log(this.name, "Está latindo")
    }
    
    this.andar = function(distancia){
        posicao += distancia
        console.log(this.name, "andou", distancia,"m")
        console.log("A posicao atua é", posicao)
    }
}

const rex = new Cachorro("rex")
const toto = new Cachorro("Totó")

rex.latir()
rex.andar(5)

//igual conhecimento de java