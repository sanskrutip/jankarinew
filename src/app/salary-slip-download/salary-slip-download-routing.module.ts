import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalarySlipDownloadComponent } from './salary-slip-download.component';

const routes: Routes = [
  {
      path: '', component: SalarySlipDownloadComponent
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalarySlipDownloadRoutingModule { }

