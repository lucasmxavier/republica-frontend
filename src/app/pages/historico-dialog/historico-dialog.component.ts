import { Component, OnInit, Inject } from '@angular/core';
import { Morador } from '../../models/morador';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoradorService } from '../../services/morador.service';
import { Historico } from '../../models/historico';
import { HistoricoService } from '../../services/historico.service';

@Component({
  selector: 'app-historico-dialog',
  templateUrl: './historico-dialog.component.html',
  styleUrls: ['./historico-dialog.component.css']
})
export class HistoricoDialogComponent implements OnInit{
  morador: Morador
  historicos: Historico[]

  constructor(public dialogRef: MatDialogRef<HistoricoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private moradorService: MoradorService,
    private historicoService: HistoricoService) {
    this.morador = data
  }

  ngOnInit() {
    this.historicoService.getHistoricobyMorador(this.morador).subscribe(data => {
      this.historicos = data
    });
  }
}
