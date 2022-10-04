
import * as ReadlineSync from 'readline-sync';
import {Auto,Registro,GestorDeArchivos} from "./clases.js";



 export default function cargarAuto(auto: string, arrayAuto: Array<Auto>) : void{

    let propiedadAuto : string[] = auto.split(','); 
    let id: string = propiedadAuto[0]
    let marca: string = propiedadAuto[1];
    let modelo: string = propiedadAuto[2];
    let año: number = Number(propiedadAuto[3])
    let patente: string = propiedadAuto[4]
    let nuevoAuto : Auto = new Auto(id,marca,modelo,año,patente);
    
    arrayAuto.push(nuevoAuto);
}
 

export  function modificarAuto(arregloAuto: Array<Auto>, posicion: number){
    let posicionCambio = Number(ReadlineSync.questionInt("Ingrese la posicion a cambiar: "));
    let id :string = ReadlineSync.question("Ingrese el id: ");
    let marca :string = ReadlineSync.question("Ingrese la marca: ");
    let modelo :string = ReadlineSync.question("Ingrese el modelo: ");
    let año : number = Number(ReadlineSync.questionInt("Ingrese el año: "));
    let patente :string = ReadlineSync.question("Ingrese el patente: ");
    posicion = posicionCambio;

    
    let autoModificado : Auto = new Auto(id,marca,modelo,año,patente);

    delete arregloAuto[posicion];
    arregloAuto[posicion] = autoModificado;
}

export  function darDeBajaAuto(arregloAuto: Array<Auto>, posicion: number){
    let posicionABorrar = Number(ReadlineSync.questionInt("Ingrese la posicion a borrar: "));
    posicion = posicionABorrar;
    
    delete arregloAuto[posicion]
}

