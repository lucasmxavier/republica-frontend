import { Morador } from './morador';
import { Endereco } from './endereco';
import { ReceitaDespesa } from './receita-despesa';

export class Republica {
    id: number;
    nome: String;
    dataFundacao: Date;
    dataExtincao: Date;
    endereco: Endereco;
    vantagens: string;
    numeroVagas: number;
    numeroVagasDisponiveis: number;
    tipoImovel: string;
    genero: string;
    linkEstatuto: string;
    representante: Morador;
    moradores: Morador[];
    receitaDespesas: ReceitaDespesa;
}
