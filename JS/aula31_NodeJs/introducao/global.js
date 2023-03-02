global.console.log("teste")
console.log(__filename)
console.log(__dirname)
// console.log(global.__filename)//não estão no objeto global
console.log(process.versions.node)
console.log(process.pid)
console.log(global.process.argv)//2 argumentos, onde esta localizado o node e onde esta logalizado o arquivo
//node global no terminal passa mais argumentos pro .argv
//node global --firstname andre --lastname "ribeiro leite"
// const [,, firstName, lastName] = process.argv // ignora o primeiro e segundo elemento da array e cria duas variameis com os dois seguintes

const getByFlag = flag => {
    const indexOffFlag = process.argv.indexOf(flag)
    return process.argv[indexOffFlag + 1]
}

const firstName = getByFlag("--firstname")
const lastName = getByFlag("--lastname")

console.log(`o nome é ${firstName} ${lastName}`)