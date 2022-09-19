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

    get dadosCliente(){
        return `${this.cliente.nome}, documento: ${this.cliente.documento}`
        /* método caso não duplicasse o documento no super do PF e PJ, seria necessário uma verificação de constructor para buscar o documento do cliente
        if(this.cliente.constructor === PF){
            return `${this.cliente.nome}, documento: ${this.cliente.CPF}`
        }else{
            `${this.cliente.nome}, documento: ${this.cliente.CNPJ}`
        }
        */
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

//criar uma classe que receba o nome e documento

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
const maria = new Cliente ("maria",2)

//criar uma classe PJ e um PF

class PF extends Cliente {
    constructor(nome,documento){
        super(nome,documento)
        this.CPF = documento
    }
}

class PJ extends Cliente {
    constructor(nome,documento){
        super(nome,documento)
        this.CNPJ = documento        
    }
}

//Polimorfismo, criar uma classe especializada em transferir com método execute(ContaOrigem, contaDestino, Valor)
//Ambas CC e CP tem método sacar, mesmo que de maneira diferentes, portando isso é polimorfismo
class Transferir{
    static execute(contaOrigem,contaDestino, valor){
        if(!contaOrigem instanceof ContaBancaria || !contaDestino instanceof ContaBancaria ){
            throw new Error("contas precisam herdar de ContaBancaria")
        }
        try{
            contaOrigem.sacar(valor)
            contaDestino.depositar(valor)
        }catch(e){
            console.log("deu ruim", e.message)
        }
    }
}

const andre = new PF ("andré","000.000.000-0")
const roberto = new PJ ("roberto","000.000.000-0")

const cp1 = new ContaPoupanca(andre,4)
const cc1 = new ContaCorrente(andre,5)
const cp2 = new ContaPoupanca(roberto,6)
const cc2 = new ContaCorrente(roberto,7)

const cpUm = new ContaPoupanca(daniel,1)
const cpDois = new ContaPoupanca(maria,2)
const ccUm = new ContaCorrente(daniel,3)
// console.log(cpUm)
console.log(cpUm.depositar(1000))
console.log(cpUm)
// console.log(ccUm)
console.log(ccUm.depositar(2000))
ccUm.limite = 1000
// console.log(ccUm)
ccUm.sacar(1000)
console.log(ccUm)

// console.log(cp1)
// console.log(cp2)
// console.log(cc2)
// console.log(cc2)
// console.log(cp1.dadosCliente)
// console.log(cp2.dadosCliente)
// console.log(cc1.dadosCliente)
// console.log(cc2.dadosCliente)