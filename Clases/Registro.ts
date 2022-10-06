import {Auto} from "./Auto";
import { Camioneta } from "./Camioneta";
import { Motos } from "./Motos";


export class Registro {
    private nombre:string;
    private direccion: string;
    private horario : string;
    private listaAutos : Array<Auto>;
    private listaMotos : Array<Motos>;
    private listaCamionetas : Array<Camioneta>;
 
    
public constructor(nombre: string, direccion: string, horario: string, listaAutos: Array<Auto>,listaMotos : Array<Motos>,listaCamionetas : Array<Camioneta>) {
    this.nombre = nombre ;
    this.direccion= direccion;
    this.horario = horario ;
    this.listaAutos= listaAutos; 
    this.listaMotos= listaMotos; 
    this.listaCamionetas= listaCamionetas; 

}
public getListaAutos() : Auto[] {
    return this.listaAutos;
}

public mostrarListaAutos(): void {
  console.log(this.listaAutos);
  
}
public getListaMotos() : Auto[] {
    return this.listaMotos;
}

public mostrarListaMotos(): void {
  console.log(this.listaMotos);
  
}public getListaCamionetas() : Auto[] {
    return this.listaCamionetas;
}

public mostrarListaCamionetas(): void {
  console.log(this.listaCamionetas);
  
}
}