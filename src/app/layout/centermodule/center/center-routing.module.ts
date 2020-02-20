import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterComponent } from './center.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { 
      path: '',
      component: CenterComponent,
     
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule { }
