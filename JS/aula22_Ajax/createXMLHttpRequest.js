function createXMLHttpRequest(method, url, cb, data = null) {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.send(data)

    xhr.onreadystatechange = verificaAjax

    function verificaAjax() {
        // console.log(xhr.readyState)
        // //0 - Conexão não iniciada
        // //1 - resquest configurada
        // //2 - request enviada
        // //3 - em processamento
        // //4 - resposta recebida(Completa: sucesso ou falha)
        // console.log(xhr.status)
        // //200 - ok
        // //304 em cache
        // //404 error
        // console.log(xhr.response)
        // console.log(xhr.responseText)
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                // console.log(xhr.responseText)//retorna um array de objetos em formato de string
                const json = JSON.parse(xhr.responseText)//transforma a string em um array

                if (typeof cb === "function") {
                    cb(json)
                }
            } else if (typeof cb === "function") {
                cb({
                    status: xhr.status,
                    message: "algo deu errado com a conexão"
                })
            }
        }
    }
}