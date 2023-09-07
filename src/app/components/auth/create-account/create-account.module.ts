import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './screen/create-account.component';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
  ],
})
export class CreateAccountModule {}
