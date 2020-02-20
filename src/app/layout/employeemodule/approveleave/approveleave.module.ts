import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproveleaveComponent } from './approveleave.component';
import { ApproveleaveRoutingModule } from './approveleave-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ApproveleaveComponent],
  imports: [
    CommonModule,
    ApproveleaveRoutingModule,
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule
  ]
})
export class ApproveleaveModule { }
