import { Injectable } from "@angular/core";
import { ReceitaDespesa } from "../models/receita-despesa";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MoradorReceitaDespesaDto } from "../models/morador-receita-despesa-dto";
import { Morador } from "../models/morador";
import { Republica } from "../models/republica";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ReceitadespesaService {
  private receitaDespesaUrl: string;
  private receitaDespesa = new ReceitaDespesa();

  constructor(private http: HttpClient) {
    this.receitaDespesaUrl = `${environment.apiUrl}/republica/receitasdespesas`;
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    republica: new FormControl(""),
    tipo: new FormControl("", Validators.required),
    descricao: new FormControl("", Validators.required),
    valor: new FormControl("", Validators.required),
    periodo: new FormControl("", Validators.required),
    dataLancamento: new FormControl("", Validators.required),
    dataVencimentoRecebimento: new FormControl("", Validators.required),
    efetivado: new FormControl("", Validators.required),
  });

  public save(receitaDespesa: MoradorReceitaDespesaDto) {
    return this.http.post<MoradorReceitaDespesaDto>(
      this.receitaDespesaUrl,
      receitaDespesa
    );
  }

  public update(receitaDespesa: MoradorReceitaDespesaDto) {
    return this.http.put<ReceitaDespesa>(
      `${this.receitaDespesaUrl}/${receitaDespesa.id}`,
      receitaDespesa
    );
  }

  public findReceitaDespesaByMorador(morador: Morador) {
    return this.http.get<ReceitaDespesa[]>(
      `${this.receitaDespesaUrl}/republica/${morador.republica.id}/morador/${morador.id}`
    );
  }

  public findReceitaDespesaByRepublica(republica: Republica) {
    return this.http.get<ReceitaDespesa[]>(
      `${this.receitaDespesaUrl}/republica/${republica.id}`
    );
  }

  public pagar(morador: Morador, id: number) {
    return this.http.post<void>(
      `${this.receitaDespesaUrl}/republica/${morador.republica.id}/morador/${morador.id}/pagar/${id}`,
      ""
    );
  }

  public getReceitaDespesa() {
    return this.receitaDespesa;
  }

  public setReceitaDespesa(receitaDespesa: ReceitaDespesa) {
    this.receitaDespesa = receitaDespesa;
  }

  public estornar(receitaDespesa: ReceitaDespesa) {
    return this.http.post<MoradorReceitaDespesaDto>(
      `${this.receitaDespesaUrl}/estornar/`,
      receitaDespesa
    );
  }
}
