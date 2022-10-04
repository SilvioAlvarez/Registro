import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';

class Auto {
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


class Registro {
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

class GestorDeArchivos {

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


function cargarAuto(auto: string, arrayAuto: Array<Auto>) : void{

    let propiedadAuto : string[] = auto.split(','); 
    let id: string = propiedadAuto[0]
    let marca: string = propiedadAuto[1];
    let modelo: string = propiedadAuto[2];
    let año: number = Number(propiedadAuto[3])
    let patente: string = propiedadAuto[4]
    let nuevoAuto : Auto = new Auto(id,marca,modelo,año,patente);

    arrayAuto.push(nuevoAuto);
}

let datos: GestorDeArchivos = new GestorDeArchivos("autos.txt");
let listaAutos : Array<Auto> = [];
let datosRegistro : Registro = new Registro ("Coronel Dorrego", "Santagada 645", "Lunes a viernes de 7hs a 13hs", listaAutos);


for (let i : number= 0; i < datos.getArregloString().length; i++){

    cargarAuto(datos.getArregloString()[i], listaAutos);
    
}
console.log (datosRegistro)

    function modificarAuto(arregloAuto: Array<Auto>, posicion: number){
        let posicionCambio = Number(ReadlineSync.questionInt("Ingrese la posicion a cambiar: "));
        let id :string = ReadlineSync.question("Ingrese el id: ");
        let marca :string = ReadlineSync.question("Ingrese la marca: ");
        let modelo :string = ReadlineSync.question("Ingrese el modelo: ");
        let año : number = Number(ReadlineSync.questionInt("Ingrese el año: "));
        let patente :string = ReadlineSync.question("Ingrese el patente: ");
        posicion = posicionCambio;

        
        let autoModificado : Auto = new Auto(id,marca,modelo,año,patente);
    
        delete arregloAuto[posicion];
        arregloAuto[posicion] = autoModificado;
    }

    function darDeBajaAuto(arregloAuto: Array<Auto>, posicion: number){
        let posicionABorrar = Number(ReadlineSync.questionInt("Ingrese la posicion a borrar: "));
        posicion = posicionABorrar;
        
        delete arregloAuto[posicion]
    }

modificarAuto(listaAutos,1);
console.log(listaAutos);

darDeBajaAuto(listaAutos,2);
console.log(listaAutos);