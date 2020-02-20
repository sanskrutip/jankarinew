import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeaveEscalationComponent } from './leave-escalation.component';

const routes: Routes = [
  {
      path: '', component: LeaveEscalationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeaveEscalationRoutingModule { }

