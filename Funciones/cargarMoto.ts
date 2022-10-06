import {Motos} from "../Clases/Motos";


export default function cargarMoto(auto: string, arrayMoto: Array<Motos>) : void{

    let propiedadAuto : string[] = auto.split(','); 
    let id: string = propiedadAuto[0]
    let marca: string = propiedadAuto[1];
    let modelo: string = propiedadAuto[2];
    let año: number = Number(propiedadAuto[3])
    let patente: string = propiedadAuto[4]
    let cilindrada: number=Number(propiedadAuto[5])
    let nuevoMoto : Motos = new Motos(id,marca,modelo,año,patente,cilindrada);
    
    arrayMoto.push(nuevoMoto);
}
