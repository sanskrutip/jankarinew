import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiAgreementComponent } from './idi-agreement.component';
import { IdiAgreementRoutingModule } from './idi-agreement-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [IdiAgreementComponent],
  imports: [
    CommonModule,
    IdiAgreementRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class IdiAgreementModule { }
