const fs = require("fs")
const dado = require("./dados/dados.json")

fs.readFile("./dados/dados.json", "utf-8", (err, content) => {
    if (err) {
        throw err
    }
    console.log(JSON.parse(content)[0].name)
})

console.log("----------")
console.log(dado[0].name)