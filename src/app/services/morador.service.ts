import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Morador } from '../models/morador';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {

  private moradoresUrl: string;
  private morador = new Morador();

  constructor(private http: HttpClient) {
    this.moradoresUrl = `${environment.apiUrl}/moradores`;
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    nome: new FormControl('', Validators.required),
    apelido: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
    telefoneResponsavel1: new FormControl('', Validators.required),
    telefoneResponsavel2: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required)
    // instituicao: new FormControl('', Validators.required),
    // curso: new FormControl('', Validators.required)
  });

  public findAll(): Observable<Morador[]> {
    return this.http.get<Morador[]>(this.moradoresUrl);
  }

  public getMoradorById(id: string): Observable<Morador> {
    return this.http.get<Morador>(`${this.moradoresUrl}/${id}`);
  }

  public save(morador: Morador) {
    return this.http.post<Morador>(this.moradoresUrl, morador);
  }

  public update(morador: Morador) {
    return this.http.put<Morador>(`${this.moradoresUrl}/${morador.id}`, morador);
  }

  public delete(id: number) {
    return this.http.delete<void>(`${this.moradoresUrl}/${id}`);
  }

  public getMoradoresByName(name: string) {
    return this.http.get<Morador[]>(`${this.moradoresUrl}/${name}/busca`);
  }

  public getMorador() {
    return this.morador;
  }

  public setMorador(morador: Morador) {
    this.morador = morador;
  }

}
