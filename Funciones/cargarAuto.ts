import { Auto } from "../Clases/Auto";


export default function cargarAuto(auto: string, arrayAuto: Array<Auto>): void {

    let propiedadAuto: string[] = auto.split(',');
    let id: string = propiedadAuto[0]
    let marca: string = propiedadAuto[1];
    let modelo: string = propiedadAuto[2];
    let año: number = Number(propiedadAuto[3])
    let patente: string = propiedadAuto[4]
    let nuevoAuto: Auto = new Auto(id, marca, modelo, año, patente);

    arrayAuto.push(nuevoAuto);
}