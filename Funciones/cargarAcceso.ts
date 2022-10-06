import * as ReadlineSync from 'readline-sync';
import { Contraseña } from "../Clases/Acceso";


export function cargarAcceso(nombre: string, contraseña: string, intentos: number): void {

    let ponerNombre: string = "Silvio";
    let ponerContraseña: string = "Karen";
    intentos = 3;
    nombre = ReadlineSync.question("Ingrese nombre: ");
    contraseña = ReadlineSync.question("Ingrese contraseña: ");

    while ((nombre != ponerNombre) || (contraseña != ponerContraseña) && (intentos)) {
        nombre = ReadlineSync.question("Ingrese nombre: ");
        contraseña = ReadlineSync.question("Ingrese contraseña: ");
    }
    intentos++;
    if (intentos == 3) {
        ReadlineSync.question("Acceso denegado");

    }
    console.log("Acceso correcto");
}