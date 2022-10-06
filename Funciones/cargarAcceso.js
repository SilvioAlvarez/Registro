"use strict";
exports.__esModule = true;
exports.cargarAcceso = void 0;
var ReadlineSync = require("readline-sync");
function cargarAcceso(nombre, contraseña, intentos) {
    var ponerNombre = "Silvio";
    var ponerContraseña = "Karen";
    intentos = 3;
    nombre = ReadlineSync.question("Ingrese nombre: ");
    contraseña = ReadlineSync.question("Ingrese contraseña: ");
    while ((nombre != ponerNombre) || (contraseña != ponerContraseña) && (intentos)) {
        nombre = ReadlineSync.question("Ingrese nombre: ");
        contraseña = ReadlineSync.question("Ingrese contraseña: ");
    }
    intentos++;
    if (intentos == 3) {
        ReadlineSync.question("Acceso denegado");
    }
    console.log("Acceso correcto");
}
exports.cargarAcceso = cargarAcceso;
