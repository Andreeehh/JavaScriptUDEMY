"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(categoria) {
        this.categoria = categoria;
    }
    Animal.prototype.mostrarCategoria = function () {
        console.log("A categoria \u00E9: " + this.categoria);
    };
    return Animal;
}());
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nome, idade) {
        var _this = _super.call(this, "mamifero") || this;
        _this.nome = nome;
        _this.idade = idade;
        return _this;
    }
    Gato.prototype.mostrarDetalhes = function () {
        console.log("mostrar detalhe chamado");
    };
    return Gato;
}(Animal));
var Cachorro = /** @class */ (function () {
    function Cachorro(categoria, nome, idade) {
        this.categoria = categoria;
        this.nome = nome;
        this.idade = idade;
    }
    Cachorro.prototype.mostrarDetalhes = function () {
        console.log("mostrar detalhe chamado");
    };
    return Cachorro;
}());
var mingal = new Gato("mingal", 14);
console.log(mingal);
var bud = new Cachorro("mamifero", "bud");
console.log(bud);
exports.default = 1;
