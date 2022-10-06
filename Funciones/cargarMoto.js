"use strict";
exports.__esModule = true;
var Motos_1 = require("../Clases/Motos");
function cargarMoto(auto, arrayMoto) {
    var propiedadAuto = auto.split(',');
    var id = propiedadAuto[0];
    var marca = propiedadAuto[1];
    var modelo = propiedadAuto[2];
    var año = Number(propiedadAuto[3]);
    var patente = propiedadAuto[4];
    var cilindrada = Number(propiedadAuto[5]);
    var nuevoMoto = new Motos_1.Motos(id, marca, modelo, año, patente, cilindrada);
    arrayMoto.push(nuevoMoto);
}
exports["default"] = cargarMoto;
