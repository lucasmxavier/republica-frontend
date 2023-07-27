import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MoradorService } from '../../services/morador.service';
import { MatDialog } from '@angular/material/dialog';
import { Morador } from '../../models/morador';
import { SolicitacaoService } from '../../services/solicitacao.service';
import { Solicitacao } from '../../models/solicitacao';
import { NotificacaoListDialogComponent } from '../notification-list-dialog/notificacao-list-dialog.component';
import { Feedback } from '../../models/feedback';
import { FeedbackService } from '../../services/feedback.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  moradores: Morador[] = [];

  isLoggedIn = false;
  idMorador = '';
  username = '';
  idRepublica = '';

  morador: Morador;

  solicitacoes: Solicitacao[] = [];
  feedbacks: Feedback[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private moradorService: MoradorService,
    private solicitacaoService: SolicitacaoService,
    private feedbackService: FeedbackService,
    private dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService,
    private tokenStorageService: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.idMorador = this.tokenStorageService.getUserId();
      this.username = this.tokenStorageService.getUser().username;

      this.getMorador().then (() => {
        if (this.morador) {
          if (this.morador.republica.id !== undefined) {
              this.idRepublica = this.morador.republica.id.toString();
              localStorage.setItem('idRepublica', this.idRepublica);
              this.router.navigate(['republica/gerencia']);
          }

          this.atualizarListaSolicitacoes();
          this.atualizarListaFeedbacks();
        } else {
          this.router.navigate(['addmorador']);
        }
      });
    }
  }

  async getMorador() {
    this.morador = await this.moradorService.getMoradorById(this.idMorador)
      .toPromise().catch(() => undefined);
  }

  onChange(value: Morador) {
    sessionStorage.clear();

    /*
    this.loginService.setMorador(value);
    this.solicitacaoService.setMorador(value);

    this.ngOnInit();
    */
  }

  handleLogout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/']);
  }

  visualizarNotificacoes(): void {
    const dialogRef = this.dialog.open(NotificacaoListDialogComponent, {
      width: '600px',
      data: {
        solicitacoes: this.solicitacoes,
        feedbacks: this.feedbacks
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.atualizarListaSolicitacoes();
    });
  }

  totalNotificacoes(): number {
    return this.solicitacoes.length + this.feedbacks.length;
  }

  atualizarListaSolicitacoes() {
    this.solicitacaoService.findAll(this.idMorador).subscribe(data => {
      this.solicitacoes = data;
    });
  }

  atualizarListaFeedbacks() {

    if (this.idRepublica !== '') {
      this.feedbackService
        .findByRepublicaAndMorador(this.idRepublica, this.idMorador)
        .subscribe(data => {
          this.feedbacks = [];
          data.forEach(feedback => {
            if (feedback.status === 'RESOLUCAO SOLICITADA') {
              this.feedbacks.push(feedback);
            }
          });
      });
    }
  }

  onCreateMorador() {
    this.router.navigate(['/addmorador']);
  }
}
