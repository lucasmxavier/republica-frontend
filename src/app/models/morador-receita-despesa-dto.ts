import { Morador } from './morador';
import { Republica } from './republica';

export class MoradorReceitaDespesaDto {
    id: number;
    republica: Republica;
    tipo: String;
    descricao: String;
    valor: number;
    periodo: String;
    divisao: boolean;
    valorDividido: number;
    dataLancamento: Date;
    dataVencimentoRecebimento: Date;
    efetivado: boolean;
    moradores: Morador[];
}
