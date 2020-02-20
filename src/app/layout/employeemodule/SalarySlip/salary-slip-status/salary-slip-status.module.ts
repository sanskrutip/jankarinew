import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalarySlipStatusComponent } from './salary-slip-status.component';
import { SalarySlipStatusRoutingModule } from './salary-slip-status-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatModule, PageHeaderModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSortModule, MatButtonModule, MatProgressSpinnerModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SalarySlipStatusComponent],
  imports: [
    CommonModule,
    SalarySlipStatusRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,
    PageHeaderModule,StatModule,PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    MatSortModule,MatButtonModule,
    MatIconModule,MatTooltipModule,NgbModule,MatProgressSpinnerModule
  ]
})
export class SalarySlipStatusModule { }
