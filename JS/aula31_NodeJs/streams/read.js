const fs = require("fs")

fs.readFile("./swapi.json", (err, data) => { // todo o conteudo esta indo para memória do servidor
    if (err) throw err

    const results = JSON.parse(data).results[0].name
    console.log(results)
})

const readStream = fs.createReadStream("./swapi_menor.json", "utf-8")//criando um fluxo de leitura por pedaços

// readStream.once("data", data => { //carregou um primeiro pedaço, porém executa apenas uma vez
//     console.log("once data")
//     console.log(data)
// })

let jsonString = ""

readStream.on("data", data => {
    console.log("on data")
    console.log(data.length)// executa chunks(pedaços) iguais do data por fluxo até acabar (65536)
    jsonString += data
})

readStream.on("end", () =>{
    console.log("end")
    console.log(jsonString)
})

