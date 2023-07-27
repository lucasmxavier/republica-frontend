import { Component, OnInit } from '@angular/core';
import { Morador } from '../../models/morador';
import { TarefaService } from '../../services/tarefa.service';
import { MoradorService } from '../../services/morador.service';
import { TarefaDto } from '../../models/tarefa-dto';

@Component({
  selector: 'app-morador-tarefa',
  templateUrl: './morador-tarefa.component.html',
  styleUrls: ['./morador-tarefa.component.css']
})
export class MoradorTarefaComponent implements OnInit {

  morador: Morador;
  tarefas: TarefaDto[];

  displayedColumns: string[] = ['id', 'dataAgendamento', 'dataTermino', 'descricao', 'finalizada', 'acoes'];

  constructor(private moradorService: MoradorService,
              private tarefaService: TarefaService) {}

  ngOnInit() {
    const idMorador = localStorage.getItem('userId');
    this.moradorService.getMoradorById(idMorador)
      .subscribe(morador => {
        this.morador = morador;

        this.tarefaService.findByMorador(this.morador).subscribe(data => {
          this.tarefas = data;
        });
    });
  }

  onRealizar(tarefa: TarefaDto) {
    if (confirm('Deseja confirmar realização da tarefa?')) {
      this.tarefaService.realizarTarefa(this.morador, tarefa);
    }
  }

}
