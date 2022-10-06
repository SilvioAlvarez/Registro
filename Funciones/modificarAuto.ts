import * as ReadlineSync from 'readline-sync';
import { Auto } from '../Clases/Auto';


export function modificarAuto(arregloAuto: Array<Auto>, posicion: number) {
    let posicionCambio = Number(ReadlineSync.questionInt("Ingrese la posicion a cambiar: "));
    let id: string = ReadlineSync.question("Ingrese el id: ");
    let marca: string = ReadlineSync.question("Ingrese la marca: ");
    let modelo: string = ReadlineSync.question("Ingrese el modelo: ");
    let año: number = Number(ReadlineSync.questionInt("Ingrese el año: "));
    let patente: string = ReadlineSync.question("Ingrese el patente: ");
    posicion = posicionCambio;


    let autoModificado: Auto = new Auto(id, marca, modelo, año, patente);

    delete arregloAuto[posicion];
    arregloAuto[posicion] = autoModificado;
}