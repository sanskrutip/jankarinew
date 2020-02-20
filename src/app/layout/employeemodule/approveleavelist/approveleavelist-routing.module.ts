import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproveleavelistComponent } from './approveleavelist.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '', component: ApproveleavelistComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApproveleavelistRoutingModule { }
