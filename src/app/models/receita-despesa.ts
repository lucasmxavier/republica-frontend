import { Republica } from './republica';
import { MoradorReceitaDespesa } from './morador-receita-despesa';

export class ReceitaDespesa {
    id: number;
    republica: Republica;
    tipo: string;
    descricao: string;
    valor: number;
    numeroParcelas: number;
    dataLancamento: Date;
    dataVencimentoRecebimento: Date;
    efetivado: boolean;
    aprovado: boolean;
    moradorReceitaDespesa: MoradorReceitaDespesa[];
}
