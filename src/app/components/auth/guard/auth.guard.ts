import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const token = window.localStorage.getItem('token');
  if (inject(AuthService).isUserLoggedIn()) {
    return true;
  } else {
    inject(Router).navigate(['login']);
    return false;
  }
};
