import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceitaDespesa } from '../../models/receita-despesa';
import { Republica } from '../../models/republica';
import { RepublicaService } from '../../services/republica.service';
import { ReceitadespesaService } from '../../services/receitadespesa.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { Morador } from '../../models/morador';
import { MoradorService } from '../../services/morador.service';
import { MoradorReceitaDespesaDto } from '../../models/morador-receita-despesa-dto';

@Component({
  selector: 'app-receita-despesa-form',
  templateUrl: './receita-despesa-form.component.html',
  styleUrls: ['./receita-despesa-form.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class ReceitaDespesaFormComponent implements OnInit {

  receitaDespesaDto: MoradorReceitaDespesaDto;
  republicas: Republica[];
  moradoresIncluidos: Morador[] = new Array();
  republica: Republica;

  constructor(private router: Router, 
              private receitaDespesaService: ReceitadespesaService,
              private republicaService: RepublicaService) {
    this.receitaDespesaDto = new MoradorReceitaDespesaDto();
  }

  ngOnInit() {
    //this.receitaDespesaDto = this.receitaDespesaService.getReceitaDespesa();
    const idMorador = localStorage.getItem('userId');
    this.republicaService.find(parseInt(idMorador, 10)).subscribe(data => {
      this.republica = data;
    });

  }

  onSubmit() {

    if (this.receitaDespesaDto.id === undefined) {
      this.receitaDespesaDto.republica = this.republica;
      this.receitaDespesaDto.moradores = this.moradoresIncluidos;
      this.receitaDespesaService.save(this.receitaDespesaDto).subscribe(result => {
        this.router.navigate(['/republica/financas']);
        alert('Receita / Despesa adicionada com sucesso!');
      });
    } else {
      this.receitaDespesaService.update(this.receitaDespesaDto).subscribe(result => {
        this.router.navigate(['/republica/financas']);
        alert('Receita / Despesa editada com sucesso!');
      });
    }
  }

  onChange(value) {
/*    this.republica = value;
    this.republicaService.getMoradores(this.republica).subscribe(data => {
      this.moradores = data;
    });*/
  }

  onCheck(value, isChecked) {
    if (isChecked) {
      this.moradoresIncluidos.push(value);
    } else {
      this.moradoresIncluidos.splice(this.moradoresIncluidos.indexOf(value), 1);
    }
  }

}
