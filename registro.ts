
import {Auto,Registro,GestorDeArchivos} from "./clases.js";
import cargarAuto from './funciones.js';
import modificarAuto from './funciones.js';
import darDeBajaAuto from './funciones.js';


let datos: GestorDeArchivos = new GestorDeArchivos("autos.txt");
let listaAutos : Array<Auto> = [];
let datosRegistro : Registro = new Registro ("Coronel Dorrego", "Santagada 645", "Lunes a viernes de 7hs a 13hs", listaAutos);

for (let i : number= 0; i < datos.getArregloString().length; i++){

        cargarAuto(datos.getArregloString()[i], listaAutos);
        
    }



console.log (datosRegistro)

modificarAuto;
console.log(listaAutos);

darDeBajaAuto;
console.log(listaAutos);