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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// class Animal {
//     categoria: string
//     constructor(categoria: string){
//         this.categoria = categoria
//     }
// }
//maneira mais curta
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
    function Gato(nome) {
        var _this = _super.call(this, "Mamifero") || this;
        _this.nome = nome;
        return _this;
    }
    Gato.prototype.mostrarDetalhes = function () {
        console.log(this.nome, this.categoria);
    };
    return Gato;
}(Animal));
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(_nome) {
        var _this = _super.call(this, "Mamifero") || this;
        _this._nome = _nome;
        return _this;
    }
    Object.defineProperty(Cachorro.prototype, "nome", {
        get: function () {
            console.log("get chamado");
            return this._nome;
        },
        set: function (n) {
            console.log("set chamado");
            this._nome = n;
        },
        enumerable: false,
        configurable: true
    });
    Cachorro.prototype.mostrarDetalhes = function () {
        console.log(this._nome + " é um " + this.categoria);
    };
    return Cachorro;
}(Animal));
// const animal = new Animal("mamifero") caso seja abstract, nao pode ser instanciada, somente extendida para outras classes
// // console.log(animal)
// animal.mostrarCategoria()
// animal.categoria = "nova categoria" nao pode trocar caso seja readonly ou private ou protected(protege de fora da classe mas n protege das classes extendidas)
// console.log(animal.categoria)
var mingal = new Gato("mingal");
console.log(mingal);
// mingal.nome = "Novo nome"
mingal.mostrarDetalhes();
var toto = new Cachorro("toto");
console.log(toto);
// toto.nome = "Novo nome"
// toto.mostrarDetalhes()
console.log(toto.nome);
toto.nome = "novo nome";
console.log(toto.nome);
// toto.mostrarDetalhes()
var Cliente = /** @class */ (function () {
    function Cliente() {
        this._listaAnimais = [];
        this._tempListaAnimais = [];
    }
    Cliente.prototype.adicionarAnimais = function () {
        var _a;
        var animais = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            animais[_i] = arguments[_i];
        }
        (_a = this._listaAnimais).push.apply(_a, animais);
        this._tempListaAnimais.length = 0;
        this._tempListaAnimais = __spreadArrays(this._listaAnimais);
    };
    Object.defineProperty(Cliente.prototype, "listaAnimais", {
        get: function () {
            return this._tempListaAnimais;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
var andre = new Cliente();
andre.adicionarAnimais(toto, mingal);
andre.listaAnimais.length = 0;
console.log(andre);
