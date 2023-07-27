import { Morador } from './morador';
import { Republica } from './republica';

export class Feedback {
    id: number;
    tipo: string;
    dataFeedback: Date;
    descricao: string;
    morador: Morador;
    anonimo: boolean;
    republica: Republica;
    dataSolucao: Date;
    idade: number;
    status: String;
}
