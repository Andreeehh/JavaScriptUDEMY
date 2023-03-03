const http = require("http")
const fs = require("fs")
const path = require("path")

const getStaticFile = (_path, type, res) => {
    if (!fs.existsSync(_path)) {
        res.writeHead(404)
        if (type === "text/html") {
            _path = path.join(__dirname, "static", "404.html")
        } else {
            return res.end()
        }
    } else {
        res.writeHead(200, { "Content-Type": type })
    }

    fs.createReadStream(_path).pipe(res).on("error", () => {
        res.writeHead(500)
        res.end()
    })
}

const mimeType = {
    "css": "text/css",
    "html": "text/html",
    "jpg": "image/jpg",
    "js": "application/javascript"
}

const serverStaticFile = (url, res) => {
    const _path = path.join(__dirname, "static", url)
    const extname = path.extname(url).substring(1)
    getStaticFile(_path, mimeType[extname], res)
}

http.createServer((req, res) => {
    let url = req.url
    switch (url) {
        case "/":
        case "/index.html":
            serverStaticFile("/index.html", res)
            break
        case "/favicon.ico":
            res.end()
            break
        case "/login":
            if (req.method.toLocaleLowerCase() === "post") {
                let body = ""
                req
                    .on("data", (data) => body += data)
                    .on("end", () => {
                        console.log(body)
                    })
            }
            getStaticFile("./login.html", mimeType.html, res)
            break
        default:
            serverStaticFile(url, res)
            break
    }

}).listen(3000)

console.log("servidor rodando na porta 3000 \n http://localhost:3000")