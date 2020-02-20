import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalarySlipComponent } from './salary-slip.component';
import { SalarySlipRoutingModule } from './salary-slip-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { MatSortModule, MatButtonModule, MatIconModule, MatTooltipModule, MatProgressSpinnerModule, MatTableModule, MatCheckboxModule, MatPaginatorModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SalarySlipComponent],
  imports: [
    CommonModule,
    SalarySlipRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,
    PageHeaderModule,StatModule,
    MatSortModule,MatButtonModule,
    MatIconModule,MatTooltipModule,NgbModule,MatProgressSpinnerModule,MatTableModule,MatCheckboxModule,
    MatPaginatorModule

  ]
})
export class SalarySlipModule { }
