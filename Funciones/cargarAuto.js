"use strict";
exports.__esModule = true;
var Auto_1 = require("../Clases/Auto");
function cargarAuto(auto, arrayAuto) {
    var propiedadAuto = auto.split(',');
    var id = propiedadAuto[0];
    var marca = propiedadAuto[1];
    var modelo = propiedadAuto[2];
    var año = Number(propiedadAuto[3]);
    var patente = propiedadAuto[4];
    var nuevoAuto = new Auto_1.Auto(id, marca, modelo, año, patente);
    arrayAuto.push(nuevoAuto);
}
exports["default"] = cargarAuto;
