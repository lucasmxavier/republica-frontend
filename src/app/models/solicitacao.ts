import { Morador } from './morador';
import { Republica } from './republica';

export class Solicitacao {
    id : number;
    solicitante: Morador;
    republica: Republica;
}