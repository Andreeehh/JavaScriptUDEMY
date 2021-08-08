//criar um objeto produto com get e set quantidade, que mostre quantas vezes foi consultado, e permita apenas valores positivos
(function(){
    const produto = {
        contador: 0,
        set quantidade(_quantidade){
            if(_quantidade < 0){
                throw new Error("Quantidades negativas são invalidas")
            }
            quantidade = _quantidade
        },
        get quantidade(){
            this.contador +=1
            console.log(`${this.contador} vez${this.contador > 1 ? 'es' : ''} consultada`)
            return quantidade
        }
    }
    
    console.log(produto)
    produto.quantidade = 1
    console.log(produto.quantidade)
    produto.quantidade = 10
    console.log(produto.quantidade)
})()

//crie um objeto pessoa, que tenha um get de usuarios que deve armazenar um array de strings, uma propriedade de get que retorna o ultimo usuiario do array
//um set que adicione no array, caso essa string ja não existir no array

;(function(){
    let _usuarios = []
    this.pessoa = {
        get usuarios(){
            return _usuarios//retorna a array
        },
        get lastUsuario(){
            if(_usuarios.length){
                return _usuarios[_usuarios.length - 1]//array começa em 0 e o tamanho dela começa em 1, se tiver tamanho, retorna o tamanho menos 1, para ser o ultimo
            }
            
        },
        set usuarios(user){
            if(_usuarios.indexOf(user) < 0){//caso exista o parametro passado no set para o indexOf na array _usuarios, não sera adicionado uma nova array
                _usuarios.push(user)
            }
        }
    }
    console.log(this.pessoa.usuarios)
    this.pessoa.usuarios = "André"
    console.log(this.pessoa.usuarios)
    this.pessoa.usuarios = "andre"    
    this.pessoa.usuarios = "andreee"    
    this.pessoa.usuarios = "andreeeee"    
    console.log(this.pessoa.usuarios)
    console.log(this.pessoa.lastUsuario)
    this.pessoa.usuarios = "André"
    console.log(this.pessoa.usuarios)
    console.log(this.pessoa.lastUsuario)
})()

