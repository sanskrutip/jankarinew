import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiSancharakDetailsComponent } from './idi-sancharak-details.component';
import { IdiSancharakDetailsRoutingModule } from './idi-sancharak-details-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [IdiSancharakDetailsComponent],
  imports: [
    CommonModule,
    IdiSancharakDetailsRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class IdiSancharakDetailsModule { }
