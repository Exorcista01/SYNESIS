import { AuthService } from './../../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { passwordMatchValidator } from '../../../../shared/validator/confirm-password.validator';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-register',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  [x: string]: any;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ){
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)*$/)]],
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      termsAccepted: [false, [Validators.requiredTrue]]
    },
    {
      validators: passwordMatchValidator
    }
  )
  }

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

  get isNameInvalid(): boolean{
    return this.nameControl.invalid && this.nameControl.touched;
  }

  get isEmailInvalid(): boolean {
    return this.emailControl.invalid && this.emailControl.touched;
  }

  get IsPasswordInvalid(): boolean {
    return this.passwordControl.invalid &&  this.passwordControl.touched;
  }

  get isConfirmPasswordInvalid(): boolean{
    return this.confirmPasswordControl.invalid && this.confirmPasswordControl.touched;
  }

  get isTermsInvalid(): boolean {
    return this.termsAcceptedControl.invalid && (this.termsAcceptedControl.touched || this.termsAcceptedControl.dirty);
  }

  submitDetails() {
  const postData = {...this.registerForm.value};
  delete postData.confirmPassword;
  delete postData.termsAccepted;

  this.authService.registerUser(postData as User).subscribe(
    response => {
      console.log(response),
      this.router.navigate(['/Login'])
    },
    error => console.log(error)
  );
}
  
}
