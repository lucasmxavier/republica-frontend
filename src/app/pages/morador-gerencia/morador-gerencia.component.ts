import { Component, OnInit } from '@angular/core';
import { Morador } from '../../models/morador';
import { Router } from '@angular/router';
import { MoradorService } from '../../services/morador.service';
import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-morador-gerencia',
  templateUrl: './morador-gerencia.component.html',
  styleUrls: ['./morador-gerencia.component.css']
})
export class MoradorGerenciaComponent implements OnInit {

  morador: Morador;

  constructor(private router: Router,
              private moradorService: MoradorService,
              private tokenStorga: TokenStorageService) {}

  async ngOnInit() {
    const idMorador = this.tokenStorga.getUserId();

    this.morador = await this.moradorService.getMoradorById(idMorador)
      .toPromise()
      .catch(() => undefined);

    if (this.morador === undefined) {
      this.router.navigate(['addmorador']);
    }
  }

  onEditarMorador(morador: Morador) {
    this.moradorService.setMorador(morador);
    this.router.navigate(['addmorador']);
  }

}
