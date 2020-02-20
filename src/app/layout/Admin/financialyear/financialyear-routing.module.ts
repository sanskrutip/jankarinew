import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FinancialyearComponent } from './financialyear.component';

const routes: Routes = [
  {
      path: '', component: FinancialyearComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FinancialyearRoutingModule { }

