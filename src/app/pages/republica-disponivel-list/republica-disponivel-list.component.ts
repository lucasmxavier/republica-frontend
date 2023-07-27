import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Republica } from '../../models/republica';
import { RepublicadisponivelService } from '../../services/republicadisponivel.service';
import { Morador } from '../../models/morador';
import { SolicitacaoService } from '../../services/solicitacao.service';
import { RepublicaService } from '../../services/republica.service';
import { MoradorService } from '../../services/morador.service';

@Component({
  selector: 'app-republica-disponivel-list',
  templateUrl: './republica-disponivel-list.component.html',
  styleUrls: ['./republica-disponivel-list.component.css']
})
export class RepublicadisponivelListComponent implements OnInit {

  morador = new Morador();
  republicas: Republica[];
  displayedColumns: string[] = [
    'nome',
    'endereco',
    'numeroVagas',
    'tipoImovel',
    'genero',
    'numeroVagasDisponiveis',
    'representante',
    'solicitar'
    ];

  constructor(private route: ActivatedRoute,
              private moradorService: MoradorService,
              private republicaDisponivelService: RepublicadisponivelService,
              private republicaService: RepublicaService,
              private solicitacaoService: SolicitacaoService) { }

  ngOnInit() {
    this.republicaDisponivelService.findAll().subscribe(data => {
      this.republicas = data;
    });
  }

  solicitar(republica: Republica) {
    const idMorador = localStorage.getItem('userId');
    this.moradorService.getMoradorById(idMorador)
      .subscribe(morador => {
        this.morador = morador;
        if (!this.morador.representante) {
          this.solicitacaoService.solicitar(republica, this.morador)
          .subscribe(result => {
            if (result) {
              alert('Solicitação enviada com sucesso!');
            } else {
              alert('Ocorreu um erro ao solicitar vaga!');
            }
          });
        } else {
            alert('Para solicitar vaga em uma nova republica, '
            + 'promova um novo morador a representante!');
        }
      });
  }

  buscar(name: string) {
    this.republicaService.getRepublicasByName(name).subscribe(data => {
      this.republicas = data;
    });
  }
}
