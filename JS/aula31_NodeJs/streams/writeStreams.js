const fs = require("fs")

const ws = fs.createWriteStream("./file.md", "utf-8")

ws.write("# ola mundo")

const readStream = fs.createReadStream("./swapi.json", "utf-8")
const writeStream = fs.createWriteStream("./swapi_clone.json", "utf-8")

// readStream.on("data", data => {
//     writeStream.write(data)
// })

readStream.pipe(writeStream).on("finish", () => {
    console.log("finish")
}) // funciona igual para ligar ambas