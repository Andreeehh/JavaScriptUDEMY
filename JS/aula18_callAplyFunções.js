
//const e let vc não consegue associar uma propriedade no objeto global, ja uma var sim, tudo isso no browser
function teste(str, n){
    console.log(this.name)
    console.log(str,n)
}
//todos os métodos abaixo você muda o this do objeto
teste.call({name: "maria"},"string", 20)//método call, vc primeiro passa o this que vc gostaria que fosse, depois os parametros da função
teste.apply({name: "João"},[" da Silva", 28])//método apply, você passa por parametro dentro dos [] para ser um array
teste.call({name:"João"}, ...["Da Silva", 28])//método call, onde vc separa a array com o ..., conseguindo assim passar um array

const teste2 = teste.bind({name: "Joana"})//bind retorna uma função, da função que foi chamado, com um novo this, ou seja, o teste2 recebe a função teste com um novo this, sem se preocupar em mudar ele toda vez q for chamar
teste2("Joaquina", 30)


document.addEventListener("click", teste2)