import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { TarefaDto } from '../../models/tarefa-dto';
import { Morador } from '../../models/morador';
import { MoradorService } from '../../services/morador.service';
import { MoradorTarefa } from '../../models/morador-tarefa';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
})
export class TarefaFormComponent implements OnInit {

  tarefaDto: TarefaDto;
  moradoresIncluidos: MoradorTarefa[] = [];
  morador: Morador;

  constructor(private router: Router,
              private moradorService: MoradorService,
              private tarefaService: TarefaService) {
    this.tarefaDto = new TarefaDto();
  }

  ngOnInit() {
    const idMorador = localStorage.getItem('userId');
    this.moradorService.getMoradorById(idMorador)
      .subscribe(morador => {
        this.morador = morador;
      });

    this.tarefaDto = this.tarefaService.getTarefa();
  }

  onSubmit() {

    this.tarefaDto.moradorTarefas = this.moradoresIncluidos;
    this.tarefaDto.republica = this.morador.republica;

    console.log(this.tarefaDto);

    if (this.tarefaDto.id === undefined) {
      this.tarefaService.save(this.tarefaDto).subscribe(result => {
        this.router.navigate(['/tarefasRepublica']);
        alert('Tarefa cadastrada com sucesso!');
      });
    } else {
      this.tarefaService.update(this.tarefaDto).subscribe(result => {
        this.router.navigate(['/tarefasRepublica']);
        alert('Tarefa atualizada com sucesso!');
      });
    }
  }

  onCheck(morador: Morador, isChecked: boolean) {
    const moradorTarefa = new MoradorTarefa();
    moradorTarefa.idMorador = morador.id;

    if (isChecked) {
      this.moradoresIncluidos.push(moradorTarefa);
    } else {
      this.moradoresIncluidos.splice(this.moradoresIncluidos
        .indexOf(this.moradoresIncluidos.find(m => {
          m.idMorador = morador.id;
        })), 1);
    }

    console.log(this.moradoresIncluidos);
  }

}
