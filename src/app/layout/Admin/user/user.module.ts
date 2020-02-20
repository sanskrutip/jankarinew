import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule, 
  
    ReactiveFormsModule, FormsModule,NgxPaginationModule
  ]
})
export class UserModule { }

