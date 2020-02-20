import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalndllComponent } from './calndll.component';
import { CalndllRoutingModule } from './calndll-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CalndllComponent],
  imports: [
    CommonModule,
    CalndllRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule
  ]
})
export class CalndllModule { }
