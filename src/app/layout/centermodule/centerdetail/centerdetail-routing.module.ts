import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterdetailComponent } from './centerdetail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
      path: '',
      component: CenterdetailComponent,
     
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterdetailRoutingModule { }
