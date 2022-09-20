"use strict";
function showFeedBack(message, type) {
    alert(type.toUpperCase() + ": " + message);
}
var feedback = showFeedBack("ola", "info");
function showError(message) {
    throw new Error("função marcada com never nunca retorna nada");
}
var error = showError("msg");
