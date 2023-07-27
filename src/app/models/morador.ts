import { Republica } from './republica';
import { MoradorReceitaDespesa } from './morador-receita-despesa';
import { Historico } from './historico';

export class Morador {
    id: number;
    nome: string;
    apelido: string;
    telefone: string;
    linkRedeSocial: string;
    telefoneResponsavel1: string;
    telefoneResponsavel2: string;
    sexo: string;
    representante: boolean;
    republica: Republica;
    moradorReceitaDespesas: MoradorReceitaDespesa[];
    historico: Historico;
}
