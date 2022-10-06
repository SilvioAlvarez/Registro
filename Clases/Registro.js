"use strict";
exports.__esModule = true;
exports.Registro = void 0;
var Registro = /** @class */ (function () {
    function Registro(nombre, direccion, horario, listaAutos, listaMotos, listaCamionetas) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.horario = horario;
        this.listaAutos = listaAutos;
        this.listaMotos = listaMotos;
        this.listaCamionetas = listaCamionetas;
    }
    Registro.prototype.getListaAutos = function () {
        return this.listaAutos;
    };
    Registro.prototype.mostrarListaAutos = function () {
        console.log(this.listaAutos);
    };
    Registro.prototype.getListaMotos = function () {
        return this.listaMotos;
    };
    Registro.prototype.mostrarListaMotos = function () {
        console.log(this.listaMotos);
    };
    Registro.prototype.getListaCamionetas = function () {
        return this.listaCamionetas;
    };
    Registro.prototype.mostrarListaCamionetas = function () {
        console.log(this.listaCamionetas);
    };
    return Registro;
}());
exports.Registro = Registro;
