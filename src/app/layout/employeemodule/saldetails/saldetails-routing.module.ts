import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SaldetailsComponent } from './saldetails.component';

const routes: Routes = [
  {
      path: '', component:  SaldetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SaldetailsRoutingModule { }

