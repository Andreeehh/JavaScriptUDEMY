const fs = require("fs")//procura primeiro no local package, ou no geral do node, ou depois no globais do sistema operacional
const emoji = require("node-emoji")//
const mod1 = require("./modules/mod1")
const mod2 = require("./modules/mod2")
const mod3 = require("./modules/mod3")
console.log(mod2)
console.log(mod3)
console.log(__dirname)//nao funciona no .mjs
console.log(__filename)
fs.writeFile("text.txt", "ola mundo", err => {
    if (err) throw err
    console.log("saved!", emoji.get("coffee"))
})