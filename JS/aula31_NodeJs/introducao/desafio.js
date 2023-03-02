const fs = require("fs")
const dado = require("./dados/dados.json")

const getByFlag = flag => {
    const indexOffFlag = process.argv.indexOf(flag)
    if (indexOffFlag > -1) {
        return process.argv[indexOffFlag + 1]
    }
    return null
}

const firstName = getByFlag("--firstname")
const lastName = getByFlag("--lastname")
dado.push({
    name: firstName,
    lastname: lastName
})

fs.writeFile("./dados/dados.json", JSON.stringify(dado), err => {

})