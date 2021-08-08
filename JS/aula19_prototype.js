/*
Diferenças do JavaScript para o que eu aprendi em Java sobre Orientação a objetos

prototype da função construtora é um objeto
__proto__ é a propriedade de acessar o objeto armazenado em prototipe, procura na cadeia de cima
linha 30 -> dog.__proto__ === Animal.prototype


construção Java
public class Animal {
    private String tipo;
    public Animal(String tipo){
        this.tipo = tipo;
    }
    public void setTipo(String tipo){
        this.tipo = tipo;
    }
    public String getTipo(){
        return tipo;
    }

    public String relatorioAnimal(){
        return "Tipo animal" + getTipo();
    }
}

Animal animalUm = new Animal("Mamifero");


construção JS*/
function Animal(tipo){
    if (tipo) this.tipo = tipo  //caso exista tipo, passar para a propriedade this.tipo, caso não, ela sera vazia  
}
Animal.prototype.obterTipo = function (){
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"

let cachorro = new Animal("mamifero")
let cobra = new Animal("reptil")
let peixe = new Animal()
console.log(cachorro.obterTipo())//apesar do objeto Cachorro não ter uma propriedade obterTipo, o JS começa a procurar na cadeia de protótipo, ou seja cachorro.__proto__ tem essa propriedade
console.log(cobra.obterTipo())
console.log(peixe)//objeto vazio, pois o tipo não foi passado por parametro
console.log(peixe.obterTipo())//tipo adiquirido por prototype, como ele não tem no objeto, procura na cadeia de prototypo



/*

*/