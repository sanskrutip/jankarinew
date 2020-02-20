import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalarySlipApprovalListComponent } from './salary-slip-approval-list.component';
import { SalarySlipApprovalListRoutingModule } from './salary-slip-approval-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatModule, PageHeaderModule } from 'src/app/shared';
import { MatSortModule, MatButtonModule, MatIconModule, MatTooltipModule, MatProgressSpinnerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SalarySlipApprovalListComponent],
  imports: [
    CommonModule,
    SalarySlipApprovalListRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,
    PageHeaderModule,StatModule,
    MatSortModule,MatButtonModule,
    MatIconModule,MatTooltipModule,NgbModule,MatProgressSpinnerModule
    
  ]
})
export class SalarySlipApprovalListModule { }
