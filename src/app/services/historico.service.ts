import { Injectable } from '@angular/core';
import { Historico } from '../models/historico';
import { HttpClient } from '@angular/common/http';
import { Morador } from '../models/morador';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private historicoURL: string
  private historico = new Historico();

  constructor(private http: HttpClient) {
    this.historicoURL = `${environment.apiUrl}/morador/historicos`;
  }

  public save(historico: Historico) {
    return this.http.post<Historico>(this.historicoURL, historico);
  }

  public getHistoricobyMorador(morador: Morador): Observable<Historico[]> {
    return this.http.get<Historico[]>(`${this.historicoURL}/morador/${morador.id}`);
  }

}
