const fs = require("fs")

const filemdSync = fs.readFileSync("./files/README.md", "utf-8")
console.log(filemdSync)
console.log("Arquivo lido")
console.log("--------------------------")

s.readFile("./files/README.md", "utf-8", (err, content) => {
    if (err) {
        throw err
    }
    console.log(content)
})

console.log("iniciando a leitura do arquivo")

fs.readFile("./files/banner.jpg", (err, content) => {
    if (err) {
        throw err
    }
    console.log(content)
})