import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModeofpayComponent } from './modeofpay.component';

const routes: Routes = [
  {
      path: '', component: ModeofpayComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModeofpayRoutingModule { }

