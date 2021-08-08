//desafio conta bancaria
/*
1. cria conta abstrata ContaBancaria
    cliente
    numero
    saldo
    depositar(valor)
    sacar(valor)
*/ 

class ContaBancaria{
    constructor(cliente,numero){
        if(this.constructor === ContaBancaria){
            throw new Error("ContaBancaria is an abstract Class")
        }
        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }
    depositar(valor){
        this.saldo += valor
    }
    
    sacar(){
        throw new Error("method 'sacar()' must be implemented")
    }
}


//Criar duas classes que herdam de ContaBancaria
/*
ContaCorrente
-limite
ContaPoupanca
-aniversario
*/ 

class ContaCorrente extends ContaBancaria{
    constructor(cliente,numero){
        super(cliente,numero)
        this.limite = 0
    }
    sacar(valor){
        let disponivel = this.saldo + this.limite
        if(valor > disponivel) {
            throw new Error("Saldo insuficiente")
            
        }
        this.saldo -= valor
        
    }
}


class ContaPoupanca extends ContaBancaria{
    constructor(cliente,numero){
        super(cliente,numero)
        this.aniversario = Date.now()
    }
    sacar(valor){
        if(valor > saldo) {
            throw new Error("Saldo insuficiente")
            
        }
        this.saldo -= valor
        
    }
}

//criar

class Cliente {
    constructor(nome,documento){
        if(nome){
            this.nome = nome
        }
        if(documento){
            this.documento = documento
        }
    }
}

const daniel = new Cliente ("daniel",1)
const maria = new Cliente ("daniel",2)

const cp1 = new ContaPoupanca(daniel,1)
const cp1 = new ContaPoupanca(maria,2)
const cc1 = new ContaCorrente(maria,3)

//passa a classe como propriedade