import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { 
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
    return this.emailControl.invalid && this.submitted;
  }

  get isPasswordInvalid(): boolean {
    return this.passwordControl.invalid && this.submitted;
  }

  onSubmit(): void{
    this.submitted = true;
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return
    }

    console.log("cadastro realizado com sucesso", this.loginForm.value)
  }

}
