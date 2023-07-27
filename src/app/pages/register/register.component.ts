import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  successMessage = 'Cadastro realizado com sucesso!';

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  handleRegister() {
    if (this.form.password === this.form.passwordConfirmation) {
      this.authService.register(this.form).subscribe(
        data => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/login']);
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
  }
}
