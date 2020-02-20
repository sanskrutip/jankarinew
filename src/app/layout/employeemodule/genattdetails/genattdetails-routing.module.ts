import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GenattdetailsComponent } from './genattdetails.component';

const routes: Routes = [
  {
      path: '', component: GenattdetailsComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GenattdetailsRoutingModule { }
