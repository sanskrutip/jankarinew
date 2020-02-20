import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiAddEditInfraDetailsComponent } from './idi-add-edit-infra-details.component';
import { IdiAddEditInfraDetailsRoutingModule } from './idi-add-edit-infra-details-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [IdiAddEditInfraDetailsComponent],
  imports: [
    CommonModule,
    IdiAddEditInfraDetailsRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule,NgbModule
  ]
})
export class IdiAddEditInfraDetailsModule { }
