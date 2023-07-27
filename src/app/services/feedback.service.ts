import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Republica } from '../models/republica';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private feedbackUrl: string;
  private feedback = new Feedback();

  constructor(private http: HttpClient) {
    this.feedbackUrl = `${environment.apiUrl}/feedback`;
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    tipo: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    anonimo: new FormControl(null)
  });

  public findByRepublica(republica: Republica): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.feedbackUrl}/republica/${republica.id}`);
  }

  public findByRepublicaAndMorador(idRepublica: string, idMorador: string): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.feedbackUrl}/republica/${idRepublica}/morador/${idMorador}`);
  }

  public save(feedback: Feedback) {
    return this.http.post<Feedback>(this.feedbackUrl, feedback);
  }


  public update(feedback: Feedback) {
    return this.http.put<Feedback>(this.feedbackUrl, feedback);
  }

/*
public update(feedback: Feedback) {
  return this.http.put<Feedback>(`${this.feedbackUrl}/${feedback.id}`, feedback);
}*/

  public delete(id: number) {
    return this.http.delete<void>(`${this.feedbackUrl}/${id}`);
  }

  public getFeedback() {
    return this.feedback;
  }

  public setFeedback(feedback: Feedback) {
    this.feedback = feedback;
  }

}
