import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const userJson = localStorage.getItem('user')

  if(!userJson){
    return router.navigate(['/Login']);
  }

 try {
    const user = JSON.parse(userJson);

    if (user && user.email) {
      return true; 
    } else {
      return router.navigate(['/Login']);
    }

  } 
    catch (e) {
    console.error('Erro ao parsear os dados do usuário:', e);
    return router.navigate(['/Login']);
  }

};
