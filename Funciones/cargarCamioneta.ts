import {Camioneta} from "../Clases/Camioneta";




export default function cargarCamioneta(auto: string, arrayCamioneta: Array<Camioneta>) : void{

    let propiedadAuto : string[] = auto.split(','); 
    let id: string = propiedadAuto[0]
    let marca: string = propiedadAuto[1];
    let modelo: string = propiedadAuto[2];
    let año: number = Number(propiedadAuto[3])
    let patente: string = propiedadAuto[4]
    let nuevoCamioneta : Camioneta = new Camioneta (id,marca,modelo,año,patente);
    
    arrayCamioneta.push(nuevoCamioneta);
}
