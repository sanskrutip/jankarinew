import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalUbsAddEditCentertypeComponent } from './cal-ubs-add-edit-centertype.component';
import { CalUbsAddEditCentertypeRoutingModule } from './cal-ubs-add-edit-centertype-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CalUbsAddEditCentertypeComponent],
  imports: [
    CommonModule,
    CalUbsAddEditCentertypeRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    NgbModule
  ]
})
export class CalUbsAddEditCentertypeModule { }
