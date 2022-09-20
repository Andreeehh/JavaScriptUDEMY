"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y + "";
}
var multiply = function (x, y) {
    return x * y;
};
var subtract = function (x, y) { return x - y; };
var teste = subtract(3, 1);
var andre = {
    name: "andre",
    id: 0,
    isAdmin: true,
    level: "Teacher"
};
var isAdmin = function (user) { return !!user.isAdmin; };
console.log(isAdmin(andre)); // true
var maria = {
    name: "maria",
    id: 1
};
console.log(isAdmin(maria)); // false
exports.default = 1;
