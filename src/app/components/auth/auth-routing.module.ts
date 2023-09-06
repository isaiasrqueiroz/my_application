import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { HomeComponent } from 'src/app/layout/home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        canActivate: [authGuard],
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'error',
        loadChildren: () =>
          import('./error/error.module').then((m) => m.ErrorModule),
      },
      {
        path: 'access',
        loadChildren: () =>
          import('./access/access.module').then((m) => m.AccessModule),
      },
      { path: '**', redirectTo: '/notfound' },
    ]),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
