
const calRevealPattern =(function(){
    let n = 0

    function _checkNumber(n){
        if(typeof n !== "number"){
            throw TypeError("precisa passar numero")
        }
    }

    function somar(_n){
        _checkNumber(_n)
        n += _n
        return this
    }
    function subtrair(_n){
        _checkNumber(_n)
        n -= _n
        return this
    }

    function log(){
        console.log(n)
        return this
    }
    return{
        somar,//como tem o mesmo nome da função, pode ser colocado como atributo direto
        subtrair,
        log
    }
})()
calRevealPattern.somar(5).somar(7).log().subtrair(2).log()
calRevealPattern.somar("5").somar(7).log().subtrair(2).log()//retorna o erro

//Conceito de reveal é vc manter as váriaveis fora do escopo glboal para pdoer usar o mesmo nome em mais de uma ocasião, forçando um retorno de objeto com todas as funções dentro de uma função autoinvocavel