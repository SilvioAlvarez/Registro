import * as ReadlineSync from 'readline-sync';
import {Auto} from "../Clases/Auto";


export  function darDeBajaAuto(arregloAuto: Array<Auto>, posicion: number){
    let posicionABorrar = Number(ReadlineSync.questionInt("Ingrese la posicion a borrar: "));
    posicion = posicionABorrar;
    
    delete arregloAuto[posicion]
}