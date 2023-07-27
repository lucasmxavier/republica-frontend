import { Component, OnInit } from '@angular/core';
import { Morador } from '../../models/morador';
import { MoradorService } from '../../services/morador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HistoricoDialogComponent } from '../historico-dialog/historico-dialog.component';

@Component({
  selector: 'app-morador-list',
  templateUrl: './morador-list.component.html',
  styleUrls: ['./morador-list.component.css']
})
export class MoradorListComponent implements OnInit {
  moradores: Morador[];
  displayedColumns: string[] = ['id', 'nome', 'acoes'];

  constructor(private route: ActivatedRoute, private router: Router,
              private moradorService: MoradorService, private dialog: MatDialog) { }

  ngOnInit() {
    this.moradorService.findAll().subscribe(data => {
      this.moradores = data;
    });
  }

  onHistorico(morador: Morador) {
    this.dialog.open(HistoricoDialogComponent, {
      width: '600px',
      data: morador
    });
  }

  onConvidar(morador: Morador) {

  }

  buscar(name: string) {
    this.moradorService.getMoradoresByName(name).subscribe(data => {
      this.moradores = data;
    });
  }
}
