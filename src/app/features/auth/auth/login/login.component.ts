import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      const rememberedPassword = localStorage.getItem('rememberedPassword');
      this.loginForm.patchValue({
        email: rememberedEmail,
        password: rememberedPassword,
        rememberMe: true
      });
    }
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

  clearError(): void {
    this.errorMessage = null;
  }

  LoginUser() {
    if (this.loginForm.invalid) {
      return;
    }
    
    const { email, password, rememberMe } = this.loginForm.value;

    this.authService.login(email as string, password as string).subscribe(
      response => {
        if (response.length > 0) {
          if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
            localStorage.setItem('rememberedPassword', password);
          } else {
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberedPassword');
          }
          
          localStorage.setItem('user', JSON.stringify(response[0]));
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Email ou senha inválidos. Tente novamente.';
          setTimeout(() => this.clearError(), 5000);
        }
      }
    );
  }
}