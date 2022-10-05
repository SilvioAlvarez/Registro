"use strict";
exports.__esModule = true;
var Registro_1 = require("./Clases/Registro");
var GestorDeArchivos_1 = require("./Clases/GestorDeArchivos");
var cargarAuto_1 = require("./Funciones/cargarAuto");
var cargarCamioneta_1 = require("./Funciones/cargarCamioneta");
var cargarMoto_1 = require("./Funciones/cargarMoto");
var modificarAuto_1 = require("./Funciones/modificarAuto");
var darDeBajaAuto_1 = require("./Funciones/darDeBajaAuto");
var datos = new GestorDeArchivos_1.GestorDeArchivos("autos.txt");
var datosmot = new GestorDeArchivos_1.GestorDeArchivos("motos.txt");
var datoscamione = new GestorDeArchivos_1.GestorDeArchivos("camioneta.txt");
var listaAutos = [];
var listaMotos = [];
var listaCamionetas = [];
var datosRegistro = new Registro_1.Registro("Coronel Dorrego", "Santagada 645", "Lunes a viernes de 7hs a 13hs", listaAutos, listaMotos, listaCamionetas);
for (var i = 0; i < datos.getArregloString().length; i++) {
    (0, cargarAuto_1["default"])(datos.getArregloString()[i], listaAutos);
}
for (var i = 0; i < datosmot.getArregloString1().length; i++) {
    (0, cargarMoto_1["default"])(datosmot.getArregloString1()[i], listaMotos);
}
for (var i = 0; i < datoscamione.getArregloString2().length; i++) {
    (0, cargarCamioneta_1["default"])(datoscamione.getArregloString2()[i], listaCamionetas);
}
console.log(datosRegistro);
(0, modificarAuto_1.modificarAuto)(listaAutos, 1);
console.log(listaAutos);
(0, darDeBajaAuto_1.darDeBajaAuto)(listaAutos, 1);
console.log(listaAutos);
