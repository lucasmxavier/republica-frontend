import { Component, OnInit } from '@angular/core';
import { ReceitaDespesa } from '../../models/receita-despesa';
import { ReceitadespesaService } from '../../services/receitadespesa.service';
import { Morador } from '../../models/morador';
import { MoradorService } from '../../services/morador.service';


@Component({
  selector: 'app-morador-financias',
  templateUrl: './morador-financas.component.html',
  styleUrls: ['./morador-financas.component.css']
})
export class MoradorFinancasComponent implements OnInit {

  receitaDespesa: ReceitaDespesa[];
  morador: Morador;
  despesaTotal: number;
  receitaTotal: number;

  displayedColumns: string[] = [
    'tipo',
    'descricao',
    'valor',
    'valorPago',
    'periodo',
    'dataLancamento',
    'dataVencimentoRecebimento',
    'acoes'
  ];

  constructor(
    private receitadespesaService: ReceitadespesaService,
    private moradorService: MoradorService
  ) {}

  ngOnInit() {
    const idMorador = localStorage.getItem('userId');

    this.moradorService.getMoradorById(idMorador)
      .subscribe(morador => {
        this.morador = morador;

        this.receitadespesaService
          .findReceitaDespesaByMorador(this.morador)
          .subscribe(data => {
            this.receitaDespesa = data;
          });
    });
  }

  onPagar(id) {
    this.receitadespesaService.pagar(this.morador, id).subscribe();
    alert('Finança Recebida/Paga!');
    this.ngOnInit();
  }
}
