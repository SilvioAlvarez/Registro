import {Auto} from "./Auto";

export class Registro {
    private nombre:string;
    private direccion: string;
    private horario : string;
    private listaAutos : Array<Auto>;


public constructor(nombre: string, direccion: string, horario: string, listaAutos: Array<Auto>) {
    this.nombre = nombre ;
    this.direccion= direccion;
    this.horario = horario ;
    this.listaAutos= listaAutos; 
}
public getListaAutos() : Auto[] {
    return this.listaAutos;
}

public mostrarListaAutos(): void {
  console.log(this.listaAutos);
  
}
}