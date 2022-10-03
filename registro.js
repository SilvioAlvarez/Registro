"use strict";
exports.__esModule = true;
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var Auto = /** @class */ (function () {
    function Auto(id, marca, modelo, año, patente) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.patente = patente;
    }
    return Auto;
}());
var Registro = /** @class */ (function () {
    function Registro(nombre, direccion, horario, listaAutos) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.horario = horario;
        this.listaAutos = listaAutos;
    }
    Registro.prototype.mostrarRegistro = function () {
        console.log(this.nombre);
        console.log(this.direccion);
        console.log(this.listaAutos);
    };
    Registro.prototype.getListaAutos = function () {
        return this.listaAutos;
    };
    return Registro;
}());
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
    return GestorDeArchivos;
}());
function cargarAuto(auto, arrayAuto) {
    var propiedadAuto = auto.split(',');
    var id = propiedadAuto[0];
    var marca = propiedadAuto[1];
    var modelo = propiedadAuto[2];
    var año = Number(propiedadAuto[3]);
    var patente = propiedadAuto[4];
    var nuevoAuto = new Auto(id, marca, modelo, año, patente);
    arrayAuto.push(nuevoAuto);
}
var datos = new GestorDeArchivos("autos.txt");
var listaAutos = [];
var datosRegistro = new Registro("Coronel Dorrego", "Santagada 645", "Lunes a viernes de 7hs a 13hs", listaAutos);
for (var i = 0; i < datos.getArregloString().length; i++) {
    cargarAuto(datos.getArregloString()[i], listaAutos);
}
console.log(datosRegistro);
function modificarAuto(arregloAuto, posicion) {
    var posicionCambio = Number(ReadlineSync.questionInt("Ingrese la posicion a cambiar: "));
    var id = ReadlineSync.question("Ingrese el id: ");
    var marca = ReadlineSync.question("Ingrese la marca: ");
    var modelo = ReadlineSync.question("Ingrese el modelo: ");
    var año = Number(ReadlineSync.questionInt("Ingrese el año: "));
    var patente = ReadlineSync.question("Ingrese el patente: ");
    posicion = posicionCambio;
    var autoModificado = new Auto(id, marca, modelo, año, patente);
    delete arregloAuto[posicion];
    arregloAuto[posicion] = autoModificado;
}
function borrarAuto(arregloAuto, posicion) {
    var posicionABorrar = Number(ReadlineSync.questionInt("Ingrese la posicion a borrar: "));
    posicion = posicionABorrar;
    delete arregloAuto[posicion];
}
modificarAuto(listaAutos, 1);
console.log(listaAutos);
borrarAuto(listaAutos, 2);
console.log(listaAutos);
