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
  styleUrl: './user-perfil.component.css',
})
export class UserPerfilComponent implements OnInit {
  profileForm: FormGroup;
  currentUser: User | null = null;
  avatarUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
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
        state: [''],
      }),
      institution: this.fb.group({
        name: [''],
        id: [''],
      }),
    });
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.avatarUrl = user.profile?.avatarUrl || null;
        if (user.profile) {
          this.profileForm.patchValue(user.profile);
        }
      } else {
        const userId = this.authService.getCurrentUserId();
        if (userId) {
          this.authService.getUserById(userId).subscribe();
        } else {
          console.error('Nenhum usuário logado!');
          this.router.navigate(['/Login']);
        }
      }
    });
  }

  saveProfile(): void {
    if (!this.currentUser || !this.currentUser.profile || !this.profileForm.valid) {
      console.error('Dados do usuário ou formulário inválidos. Ação cancelada.');
      return;
    }

    const currentUser = this.currentUser;
    const currentProfile = this.currentUser.profile;

    const updatedUser: User = {
      ...currentUser,
      profile: {
        ...currentProfile,
        ...this.profileForm.value,
      },
    };

    this.authService.updateUser(currentUser.id, updatedUser).subscribe({
      next: () => {
        alert('Perfil salvo com sucesso!');
      },
      error: (err) => console.error('Erro ao salvar o perfil', err),
    });
  }

  onAvatarChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || !input.files[0] || !this.currentUser || !this.currentUser.profile) {
      console.error('Arquivo ou dados do usuário ausentes. Ação cancelada.');
      return;
    }
    
    const currentUser = this.currentUser;
    const currentProfile = this.currentUser.profile;
    const file = input.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const newAvatarUrl = reader.result as string;

      const updatedUser: User = {
        ...currentUser,
        profile: {
          ...currentProfile,
          avatarUrl: newAvatarUrl,
        },
      };

      this.authService
        .updateUser(currentUser.id, updatedUser)
        .subscribe({
          next: () => console.log('Avatar atualizado com sucesso!'),
          error: (err) => console.error('Erro ao atualizar avatar', err),
        });
    };
    reader.readAsDataURL(file);
  }
  
  triggerAvatarInput(): void {
    const input = document.getElementById('avatarInput') as HTMLInputElement;
    input.click();
  }
}