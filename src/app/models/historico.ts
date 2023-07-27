import { Morador } from './morador'
import { Republica } from './republica';

export class Historico {
    id: number;
    morador: Morador;
    republica: Republica;
    dataEntrada: Date;
    dataSaida: Date;
}
