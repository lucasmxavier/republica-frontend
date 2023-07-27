import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TarefaDto } from '../models/tarefa-dto';
import { Republica } from '../models/republica';
import { Morador } from '../models/morador';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private tarefaUrl: string;
  private tarefa = new TarefaDto();

  constructor(private http: HttpClient) {
    this.tarefaUrl = `${environment.apiUrl}/tarefas`;
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    descricao: new FormControl('', Validators.required),
    dataTermino: new FormControl('', Validators.required),
  });

  public findByRepublica(republica: Republica) {
    return this.http.get<TarefaDto[]>(`${this.tarefaUrl}/republica/${republica.id}`);
  }

  public findByMorador(morador: Morador) {
    return this.http.get<TarefaDto[]>(`${this.tarefaUrl}/republica/${morador.republica.id}/morador/${morador.id}`);
  }

  public save(tarefaDto: TarefaDto) {
    return this.http.post<TarefaDto>(this.tarefaUrl, tarefaDto);
  }

  public update(tarefa: TarefaDto) {
    return this.http.put<TarefaDto>(`${this.tarefaUrl}/${tarefa.id}`, tarefa);
  }

  public delete(tarefa: TarefaDto) {
    return this.http.delete<void>(`${this.tarefaUrl}/${tarefa.id}`);
  }

  public realizarTarefa(morador: Morador, tarefa: TarefaDto) {
    return this.http.post<void>(`${this.tarefaUrl}/republica/${morador.republica.id}/morador/${morador.id}/realizar`, tarefa);
  }

  public getTarefa() {
    return this.tarefa;
  }

  public setTarefa(tarefa: TarefaDto) {
    this.tarefa = tarefa;
  }

}
