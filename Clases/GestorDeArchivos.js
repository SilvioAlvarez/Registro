"use strict";
exports.__esModule = true;
exports.GestorDeArchivos = void 0;
var fs = require("fs");
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    GestorDeArchivos.prototype.getArregloString1 = function () {
        return this.arregloString;
    };
    GestorDeArchivos.prototype.getArregloString2 = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
exports.GestorDeArchivos = GestorDeArchivos;
