"use strict";
exports.__esModule = true;
exports.darDeBajaAuto = void 0;
var ReadlineSync = require("readline-sync");
function darDeBajaAuto(arregloAuto, posicion) {
    var posicionABorrar = Number(ReadlineSync.questionInt("Ingrese la posicion a borrar: "));
    posicion = posicionABorrar;
    delete arregloAuto[posicion];
}
exports.darDeBajaAuto = darDeBajaAuto;
