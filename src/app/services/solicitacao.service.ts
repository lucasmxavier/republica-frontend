import { Injectable } from '@angular/core';
import { Solicitacao } from '../models/solicitacao';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Morador } from '../models/morador';
import { Republica } from '../models/republica';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  private solicitacaoUrl: string;
  private solicitacao: number[];

  constructor(private http: HttpClient) {
    this.solicitacaoUrl = `${environment.apiUrl}/solicitacao`;
  }

  public solicitar(republica: Republica, morador: Morador) {
    this.solicitacao = [];
    this.solicitacao.push(republica.id);
    this.solicitacao.push(morador.id);
    return this.http.post<Solicitacao>(this.solicitacaoUrl, this.solicitacao);
  }

  public delete(id: string) {
    return this.http.delete<void>(`${this.solicitacaoUrl}/${id}`);
  }

  public findAll(id: string): Observable<Solicitacao[]> {
    return this.http.get<Solicitacao[]>(`${this.solicitacaoUrl}/${id}`);
  }
}