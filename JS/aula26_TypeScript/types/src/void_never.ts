function showFeedBack(message: string, type: string) {
    alert(type.toUpperCase() + ": " + message)
}

const feedback = showFeedBack("ola", "info")

function showError(message: string): never{
    throw new Error("função marcada com never nunca retorna nada")
}

const error = showError("msg")
