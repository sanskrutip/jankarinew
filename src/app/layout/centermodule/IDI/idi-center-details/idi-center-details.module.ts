import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiCenterDetailsComponent } from './idi-center-details.component';
import { IdiCenterDetailsRoutingModule } from './idi-center-details-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [IdiCenterDetailsComponent],
  imports: [
    CommonModule,
    IdiCenterDetailsRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatTooltipModule
  ]
})
export class IdiCenterDetailsModule { }
