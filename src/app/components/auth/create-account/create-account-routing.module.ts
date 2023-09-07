import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './screen/create-account.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CreateAccountComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CreateAccountRoutingModule {}
