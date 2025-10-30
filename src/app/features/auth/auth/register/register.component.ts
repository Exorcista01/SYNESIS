import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../../core/models/user.model';
import { passwordMatchValidator } from '../../../../shared/validator/confirm-password.validator';
import { AuthService } from './../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // [x: string]: any; <-- MUDANÇA 2: Removido (desnecessário)
  registerForm: FormGroup;
  errorMessage: string | null = null; // <-- MUDANÇA 3: Adicionado para feedback

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)*$/),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        termsAccepted: [false, [Validators.requiredTrue]],
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }

  // --- Getters (Seu código original estava perfeito) ---
  get nameControl(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }
  get emailControl(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmPasswordControl(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
  }
  get termsAcceptedControl(): FormControl {
    return this.registerForm.get('termsAccepted') as FormControl;
  }
  get isNameInvalid(): boolean {
    return this.nameControl.invalid && this.nameControl.touched;
  }
  get isEmailInvalid(): boolean {
    return this.emailControl.invalid && this.emailControl.touched;
  }
  get IsPasswordInvalid(): boolean {
    return this.passwordControl.invalid && this.passwordControl.touched;
  }
  get isConfirmPasswordInvalid(): boolean {
    return (
      this.confirmPasswordControl.invalid && this.confirmPasswordControl.touched
    );
  }
  get isTermsInvalid(): boolean {
    return (
      this.termsAcceptedControl.invalid &&
      (this.termsAcceptedControl.touched || this.termsAcceptedControl.dirty)
    );
  }

  submitDetails() {
    this.errorMessage = null; // Limpa erros antigos
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched(); // Mostra todos os erros
      return;
    }

    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword;
    delete postData.termsAccepted;

    // --- MUDANÇA 4: Lógica de 'subscribe' melhorada ---
    this.authService.registerUser(postData as User).subscribe({
      next: () => {
        // Sucesso!
        console.log('Usuário registrado com sucesso.');
        this.router.navigate(['/Login']);
      },
      error: (err) => {
        // Mostra o erro para o usuário
        if (err.code === 'auth/email-already-in-use') {
          this.errorMessage = 'Este e-mail já está em uso.';
        } else {
          this.errorMessage = 'Ocorreu um erro ao registrar. Tente novamente.';
        }
        console.error('Erro no registro:', err);
      },
    });
  }
}
