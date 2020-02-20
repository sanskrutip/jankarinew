import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard.component';

const routes: Routes = [
  {
      path: '',
      component: AdmindashboardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdmindashboardRoutingModule { }

