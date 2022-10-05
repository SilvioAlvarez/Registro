
import {Auto} from "./Clases/Auto";
import {Registro} from "./Clases/Registro";
import {GestorDeArchivos} from "./Clases/GestorDeArchivos";
import cargarAuto from './Funciones/cargarAuto';
import modificarAuto from './Funciones/cargarAuto';
import darDeBajaAuto from './Funciones/cargarAuto';


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