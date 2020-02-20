import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IdiCenterlistComponent } from './idi-centerlist.component';


const routes: Routes = [
  { 
      path: '',
      component: IdiCenterlistComponent,
     
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdiCenterlistRoutingModule { }
