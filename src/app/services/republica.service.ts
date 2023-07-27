import { Injectable } from '@angular/core';
import { Republica } from '../models/republica';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Morador } from '../models/morador';
import { ThrowStmt } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepublicaService {

  private republicasUrl: string;
  private republica = new Republica();
  private morador = new Morador();
  private moradores: Morador[];

  constructor(private http: HttpClient) {
    this.republicasUrl = `${environment.apiUrl}/republicas`;
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    nome: new FormControl('', Validators.required),
    vantagens: new FormControl('', Validators.required),
    numeroVagas: new FormControl('', Validators.required),
    tipoImovel: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    linkEstatuto: new FormControl('', ),
    cep: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    bairro: new FormControl('', Validators.required),
    logradouro: new FormControl('', Validators.required),
    pontoDeReferencia: new FormControl('', )
  });

  public find(id: number): Observable<Republica> {
    return this.http.get<Republica>(`${this.republicasUrl}/${id}`);
  }

  public save(republica: Republica) {
    return this.http.post<Republica>(this.republicasUrl, republica);
  }

  public update(republica: Republica) {
    return this.http.put<Republica>(`${this.republicasUrl}/${republica.id}`, republica);
  }

  public delete(id: number) {
    return this.http.delete<void>(`${this.republicasUrl}/${id}`);
  }

  public getRepublica() {
    return this.republica;
  }

  public setRepublica(republica: Republica) {
    this.republica = republica;
  }

  public getMoradores(republica: Republica): Observable<Morador[]> {
    return this.http.get<Morador[]>(`${this.republicasUrl}/${republica.id}/moradores`);
  }

  public deleteMorador(idRepublica: number, idMorador: number) {
    return this.http.get<boolean>(`${this.republicasUrl}/${idRepublica}/removermorador/${idMorador}`);
  }

  public alterarRepresentante(idRepublica: number, idMorador: number) {
    return this.http.get<boolean>(`${this.republicasUrl}/${idRepublica}/alterarrepresentante/${idMorador}`);
  }

  public addMorador(morador: Morador) {
    return this.http.post<boolean>(`${this.republicasUrl}/${this.republica.id}/adicionarmorador/`, morador);
  }

  public getRepublicasByName(name : String) {
    return this.http.get<Republica[]>(`${this.republicasUrl}/${name}/busca`);
  }

}
