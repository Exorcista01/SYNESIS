import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../../core/services/auth.service';


@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule, CommonModule, ToastModule, ButtonModule],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  get isEmailInvalid(): boolean {
    return this.emailControl.invalid && this.emailControl.touched;
  }

  get isPasswordInvalid(): boolean {
    return this.passwordControl.invalid && this.passwordControl.touched;
  }


  LoginUser() {
    const {email, password} = this.loginForm.value;


    this.authService.login(email as string, password as string).subscribe(
      response => {
        if(response.length > 0 ){
          localStorage.setItem('user', JSON.stringify(response[0]))
          this.router.navigate(['/']);
        }
      }
    )
  }
  
}
