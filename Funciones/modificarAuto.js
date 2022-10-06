"use strict";
exports.__esModule = true;
exports.modificarAuto = void 0;
var ReadlineSync = require("readline-sync");
var Auto_1 = require("../Clases/Auto");
function modificarAuto(arregloAuto, posicion) {
    var posicionCambio = Number(ReadlineSync.questionInt("Ingrese la posicion a cambiar: "));
    var id = ReadlineSync.question("Ingrese el id: ");
    var marca = ReadlineSync.question("Ingrese la marca: ");
    var modelo = ReadlineSync.question("Ingrese el modelo: ");
    var año = Number(ReadlineSync.questionInt("Ingrese el año: "));
    var patente = ReadlineSync.question("Ingrese el patente: ");
    posicion = posicionCambio;
    var autoModificado = new Auto_1.Auto(id, marca, modelo, año, patente);
    delete arregloAuto[posicion];
    arregloAuto[posicion] = autoModificado;
}
exports.modificarAuto = modificarAuto;
