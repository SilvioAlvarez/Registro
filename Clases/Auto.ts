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