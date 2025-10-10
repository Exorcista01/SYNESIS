import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../../core/services/auth.service';
import { User } from '../../../../../../core/models/user.model';

@Component({
  selector: 'app-user-perfil',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-perfil.component.html',
  styleUrl: './user-perfil.component.css'
})
export class UserPerfilComponent implements OnInit {

  profileForm: FormGroup;
  currentUser: User | null = null;
  currentUserId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private  authService: AuthService,
    private router: Router,
  ) {
    this.profileForm = this.fb.group({
      fullName: [''],
      responsibleName: [''],
      course: [''],
      classYear: [''],
      address: this.fb.group({
        zipCode: [''],
        street: [''],
        neighborhood: [''],
        city: [''],
        state: ['']
      }),
      institution: this.fb.group({
        name: [''],
        id: ['']
      })
    });
  }

  ngOnInit(): void {
    this.currentUserId = this.authService.getCurrentUserId();

    if (this.currentUserId) {
      this.loadUserData();
    } else {
      console.error('Nenhum usuário logado!');
      this.router.navigate(['/Login']);
    }
  }

  loadUserData(): void {
    if (!this.currentUserId) return;

    this.authService.getUserById(this.currentUserId).subscribe(user => {
      this.currentUser = user;
      if (user.profile) {
        this.profileForm.patchValue(user.profile);
      }
    });
  }

  saveProfile(): void {
    if (this.profileForm.valid && this.currentUser && this.currentUserId) {
      const updatedUser: User = {
        ...this.currentUser,
        profile: this.profileForm.value
      };

      this.authService.updateUser(this.currentUserId, updatedUser).subscribe({
        next: (response) => {
          alert('Perfil salvo com sucesso!');
        },
        error: (err) => console.error('Erro ao salvar o perfil', err)
      });
    }
  }
}