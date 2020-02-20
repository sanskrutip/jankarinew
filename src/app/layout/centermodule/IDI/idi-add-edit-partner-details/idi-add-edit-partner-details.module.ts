import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiAddEditPartnerDetailsComponent } from './idi-add-edit-partner-details.component';
import { IdiAddEditPartnerDetailsRoutingModule } from './idi-add-edit-partner-details-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [IdiAddEditPartnerDetailsComponent],
  imports: [
    CommonModule,
    IdiAddEditPartnerDetailsRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class IdiAddEditPartnerDetailsModule { }
