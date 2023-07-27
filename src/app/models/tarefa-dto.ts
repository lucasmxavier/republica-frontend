import { Republica } from './republica';
import { Morador } from './morador';
import { MoradorTarefa } from './morador-tarefa';

export class TarefaDto {
    id: number;
    republica: Republica;
    dataAgendamento: Date;
    moradorTarefas: MoradorTarefa[];
    descricao: string;
    dataTermino: Date;
}
