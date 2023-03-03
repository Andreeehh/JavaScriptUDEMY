const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text-plain" })
    // res.end(`
    // <!DOCTYPE html>
    // <html>

    // <head>
    //     <title>Ola Mundo !!!</title>

    //     <link rel="stylesheet" href="estilo/estilo.css">
    // </head>

    // <body>
    //     <h1>Ola Mundo !!!</h1>
    //     <p>url: ${req.url}</p>

    //     <img src="img/logo.png" alt="">
    // </body>

    // </html>
    // `)


    switch (req.url) {
        case "/":
        case "/index.html":
            fs.readFile("./index.html", (err, html) => {
                if (err) {
                    res.writeHead(500)
                    res.end("<h1> Deu erro </h1>")
                }
                res.writeHead(200, { "Content-Type": "text/html" })
                const converToTemplate = new Function("return `" + html + "`")
                res.end(converToTemplate.call(req))
            })
            break
        case "/estilo/estilo.css":
            res.writeHead(200, { "Content-Type": "text/css" })
            res.end("body {color: red;}")
            break
        case "/img/logo.jpg":
            res.writeHead(200, { "Content-Type": "image/jpg" })
            fs.createReadStream("./logo.jpg").pipe(res)
            break
        default:
            res.writeHead(404, { "Content-Type": "text/html" })
            res.end("<h1>404</h1>")
            break
    }

}).listen(3000)

console.log("servidor rodando na porta 3000 \n http://localhost:3000")