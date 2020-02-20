import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankformatComponent } from './bankformat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatModule, PageHeaderModule } from 'src/app/shared';
import { BankformatRoutingModule } from './bankformat-routing.module';



@NgModule({
  declarations: [BankformatComponent],
  imports: [
    CommonModule,
    BankformatRoutingModule,
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule, PageHeaderModule,
    StatModule,
  ]
})
export class BankformatModule { }






