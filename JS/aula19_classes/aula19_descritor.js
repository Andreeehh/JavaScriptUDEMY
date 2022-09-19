const pessoa = {
    nome: "daniel"
}

console.log(Object.getOwnPropertyDescriptor(pessoa,"nome"))//primeiramente, retorna que ele um objeto que fala se essa propriedade é configuravel, enumeravel, seu valor e se é editavel
Object.defineProperty(pessoa, "sobrenome", {//maneira de criar ou alterar as configurações de uma propriedade listadas acima, vem por padrão tudo false
    value:"Tapias Morales",
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(pessoa,"sobrenome"))
for(let prop in pessoa){
    console.log(prop)//não retorna a propriedade sobrenome, pois foi adicionada da maneira com padrão false, caso deixe enumerable true, ela sera demonstrada
}