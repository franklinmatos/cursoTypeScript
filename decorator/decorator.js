"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @logarClasse
// @logarClasseSe(false)
let EletroDomertico = class EletroDomertico {
    constructor() {
        console.log('novo...');
    }
};
EletroDomertico = __decorate([
    decorator('Franklin', 123)
], EletroDomertico);
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
// function logarClasseSe(valor: boolean) {
//     return valor ? logarClasse : null
// }
function decorator(a, b) {
    return function (_) {
        console.log(a + ' ' + b);
    };
}
//# sourceMappingURL=decorator.js.map