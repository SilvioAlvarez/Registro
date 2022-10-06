import { Auto } from '../Clases/Auto';


export class Motos extends Auto {
    public constructor(id, marca, modelo, año, patente, cilindrada) {
        super(id, marca, modelo, año, patente);
        cilindrada = cilindrada
    }
}