import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../models/feedback';
import { FeedbackService } from '../../services/feedback.service';
import { Router } from '@angular/router';
import { MoradorService } from '../../services/morador.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  feedback: Feedback;

  constructor(private router: Router,
              private moradorService: MoradorService,
              protected feedbackService: FeedbackService) {}

  ngOnInit() {
    this.feedback = this.feedbackService.getFeedback();
  }

  async onSubmit() {
    //this.feedback.morador = this.loginService.getMorador();   
    if (this.feedback.id === undefined) {

      const idMorador = localStorage.getItem('userId');
      this.feedback.morador = await this.moradorService.getMoradorById(idMorador).toPromise();
      this.feedback.republica = this.feedback.morador.republica;

      this.feedbackService.save(this.feedback).subscribe(result => {
        this.router.navigate(['/feedback']);
        alert('Feedback adicionado com sucesso!');
      });

    } else {
      this.feedbackService.update(this.feedback).subscribe(result => {
        this.router.navigate(['/feedback']);
        alert('Feedback editado com sucesso!');
      });
    }
  }
}
