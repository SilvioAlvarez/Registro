import * as fs from 'fs';

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


export class Auto {
    private id : string; 
    private marca : string;
    private modelo : string;
    private año : number;
    private patente : string;
    

public constructor(id: string, marca: string, modelo: string, año: number, patente: string) {
    this.id = id;
    this.marca = marca;
    this.modelo= modelo;
    this.año = año;
    this.patente = patente;
    
}

}

export class GestorDeArchivos {

    private arregloString: string[];

    constructor(txtFileLocation: string) {

        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8'); 
        this.arregloString = archivoTxt.split(';'); 
    
    }
   
    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }

    public getArregloString(): string[] {
        return this.arregloString;
    }

}
