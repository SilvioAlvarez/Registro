"use strict";
exports.__esModule = true;
var Camioneta_1 = require("../Clases/Camioneta");
function cargarCamioneta(auto, arrayCamioneta) {
    var propiedadAuto = auto.split(',');
    var id = propiedadAuto[0];
    var marca = propiedadAuto[1];
    var modelo = propiedadAuto[2];
    var año = Number(propiedadAuto[3]);
    var patente = propiedadAuto[4];
    var nuevoCamioneta = new Camioneta_1.Camioneta(id, marca, modelo, año, patente);
    arrayCamioneta.push(nuevoCamioneta);
}
exports["default"] = cargarCamioneta;
