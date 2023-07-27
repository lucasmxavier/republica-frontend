import { Component, OnInit } from '@angular/core';
import { Morador } from '../../models/morador';
import { TarefaService } from '../../services/tarefa.service';
import { Router } from '@angular/router';
import { MoradorService } from '../../services/morador.service';
import { TarefaDto } from '../../models/tarefa-dto';

@Component({
  selector: 'app-republica-tarefa',
  templateUrl: './republica-tarefa.component.html',
  styleUrls: ['./republica-tarefa.component.css']
})
export class RepublicaTarefaComponent implements OnInit {

  morador: Morador;
  tarefas: TarefaDto[];

  displayedColumns: string[] = ['id', 'dataAgendamento', 'dataTermino', 'descricao', 'finalizada', 'acoes'];

  constructor(private moradorService: MoradorService,
              private tarefaService: TarefaService,
              private router: Router) {}

  ngOnInit() {

    const idMorador = localStorage.getItem('userId');
    this.moradorService.getMoradorById(idMorador)
      .subscribe(morador => {
        this.morador = morador;

        if (morador.representante) {
          this.tarefaService.findByRepublica(this.morador.republica).subscribe(data => {
            this.tarefas = data;
          });
        }
    });
  }

  onUpdate(tarefa: TarefaDto) {
    this.tarefaService.setTarefa(tarefa);
    this.router.navigate(['/addtarefa']);
  }

  onDelete(tarefa: TarefaDto) {
    if (confirm('Deseja realmente excluir?')) {
      this.tarefaService.delete(tarefa);
    }
  }

  onCreate() {
    const tarefa = new TarefaDto();
    this.tarefaService.setTarefa(tarefa);
    this.router.navigate(['/addtarefa']);
  }

}
