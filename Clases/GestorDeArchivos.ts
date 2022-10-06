import * as fs from 'fs';


export class GestorDeArchivos {

    private arregloString: string[];
    private arregloString1: string[];
    private arregloString2: string[];

    
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
    public getArregloString1(): string[] {
        return this.arregloString;
    }public getArregloString2(): string[] {
        return this.arregloString;
    }
}
