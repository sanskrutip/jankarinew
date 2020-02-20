import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalarySlipDownloadComponent } from './salary-slip-download.component';
import { SalarySlipDownloadRoutingModule } from './salary-slip-download-routing.module';

@NgModule({
  declarations: [SalarySlipDownloadComponent],
  imports: [
    CommonModule,
    SalarySlipDownloadRoutingModule
  ]
})
export class SalarySlipDownloadModule { }
  