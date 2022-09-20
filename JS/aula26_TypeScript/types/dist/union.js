"use strict";
function add2(x, y) {
    if (y == undefined) {
        return null;
    }
    return x + y;
}
var nu = 3;
var un = undefined;
var nu2 = 3;
add2(nu, un);
add2(nu, nu2);
var teste3 = 10;
teste3 = 10;
teste3 = "String";
var User = {
    nome: "André",
    idade: undefined // como não é obrigatório idade (?) aceita undefined, porem nao aceita null
};
