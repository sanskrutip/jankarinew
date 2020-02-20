import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApproveleaveComponent } from './approveleave.component';

const routes: Routes = [
  {
      path: '', component: ApproveleaveComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApproveleaveRoutingModule { }
