import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Solicitacao } from '../../models/solicitacao';
import { RepublicaService } from '../../services/republica.service';
import { SolicitacaoService } from '../../services/solicitacao.service';
import { Feedback } from '../../models/feedback';

@Component({
  selector: 'app-notificacao-list-dialog',
  templateUrl: './notificacao-list-dialog.component.html',
  styleUrls: ['./notificacao-list-dialog.component.css']
})

export class NotificacaoListDialogComponent {

  solicitacoes: Solicitacao[];
  feedbacks: Feedback[];

  constructor(
    public dialogRef: MatDialogRef<NotificacaoListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private republicaService: RepublicaService,
    private solicitacaoService: SolicitacaoService) {
      this.solicitacoes = data.solicitacoes;
      console.log(this.solicitacoes);
      this.feedbacks = data.feedbacks;
     }


  public aceitarMorador(solicitacao: Solicitacao) {
    this.republicaService.setRepublica(solicitacao.republica);
    this.republicaService.addMorador(solicitacao.solicitante)
      .subscribe(response => {
        console.log(response);
        if (response) {
          this.solicitacaoService.delete(solicitacao.id.toString())
            .subscribe(result => {
              const id = this.solicitacoes.indexOf(solicitacao);
              this.solicitacoes.splice(id, 1);
            });
          alert('Morador adicionado com sucesso!');
        } else {
          alert('Morador nao pode ser adicionado!');
        }
      });
  }

  public recusarMorador(solicitacao: Solicitacao) {
    this.solicitacaoService.delete(solicitacao.id.toString())
      .subscribe(result => {
        const id = this.solicitacoes.indexOf(solicitacao);
        this.solicitacoes.splice(id, 1);
        alert('Solicitação excluída com sucesso!');
      });
  }

}
