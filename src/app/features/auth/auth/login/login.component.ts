// src/app/features/auth/auth/login/login.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { filter, take } from 'rxjs/operators';
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
      rememberMe: [false],
    });
  }

  ngOnInit(): void {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      this.loginForm.patchValue({
        email: rememberedEmail,
        rememberMe: true,
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
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password, rememberMe } = this.loginForm.value;

    this.authService.login(email as string, password as string).subscribe({
      next: (userCredential) => {
        // Login no Firebase foi OK.
        // Espere o authService.currentUser$ (que o Guard usa)
        // emitir o usuário que acabou de logar.

        this.authService.currentUser$
          .pipe(
            // --- MUDANÇA AQUI ---
            // "user != null" é um atalho que filtra BOTH null E undefined.
            filter((user) => user != null),
            take(1) // Pegue o primeiro valor não-nulo e pare de ouvir
          )
          .subscribe(() => {
            // AGORA o authGuard verá o usuário.
            if (rememberMe) {
              localStorage.setItem('rememberedEmail', email);
            } else {
              localStorage.removeItem('rememberedEmail');
            }
            this.router.navigate(['/']); // Agora a navegação vai funcionar
          });
      },
      error: (err) => {
        this.errorMessage = 'Email ou senha inválidos. Tente novamente.';
        setTimeout(() => this.clearError(), 5000);
      },
    });
  }
}
