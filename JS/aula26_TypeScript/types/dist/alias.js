"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var teste4;
teste4 = 10;
teste4 = "String";
var andre = {
    nome: "André",
    idade: undefined // como não é obrigatório idade (?) aceita undefined, porem nao aceita null
};
var maria = {
    nome: "Maria",
    idade: 25 // como não é obrigatório idade (?) aceita undefined, porem nao aceita null
};
var small = "12px";
var normal = "18px";
var large = "24px";
exports.default = 1;
