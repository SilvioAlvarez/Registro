import { cargarContraseña } from "./Funciones/cargarContraseña";
import { Auto } from "./Clases/Auto";
import { Motos } from "./Clases/Motos";
import { Camioneta } from "./Clases/Camioneta";
import { Registro } from "./Clases/Registro";
import { GestorDeArchivos } from "./Clases/GestorDeArchivos";
import cargarAuto from './Funciones/cargarAuto';
import cargarCamioneta from './Funciones/cargarCamioneta';
import cargarMoto from './Funciones/cargarMoto';
import { modificarAuto } from './Funciones/modificarAuto';
import { darDeBajaAuto } from './Funciones/darDeBajaAuto';


let datos: GestorDeArchivos = new GestorDeArchivos("autos.txt");
let datosmot: GestorDeArchivos = new GestorDeArchivos("motos.txt");
let datoscamione: GestorDeArchivos = new GestorDeArchivos("camioneta.txt");

let listaAutos: Array<Auto> = [];
let listaMotos: Array<Motos> = [];
let listaCamionetas: Array<Camioneta> = [];

let datosRegistro: Registro = new Registro("Coronel Dorrego", "Santagada 645", "Lunes a viernes de 7hs a 13hs", listaAutos, listaMotos, listaCamionetas);

for (let i: number = 0; i < datos.getArregloString().length; i++) {


    cargarAuto(datos.getArregloString()[i], listaAutos);


}
for (let i: number = 0; i < datosmot.getArregloString1().length; i++) {


    cargarMoto(datosmot.getArregloString1()[i], listaMotos);


} for (let i: number = 0; i < datoscamione.getArregloString2().length; i++) {


    cargarCamioneta(datoscamione.getArregloString2()[i], listaCamionetas);


}

cargarContraseña("Silvio", "Karen", 3);
console.log(datosRegistro);
modificarAuto(listaAutos, 1);
console.log(listaAutos)


darDeBajaAuto(listaAutos, 1);
console.log(listaAutos)

