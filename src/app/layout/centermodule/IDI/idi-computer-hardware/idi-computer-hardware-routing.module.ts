import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IdiComputerHardwareComponent } from './idi-computer-hardware.component';

const routes: Routes = [
  { 
      path: '',
      component: IdiComputerHardwareComponent,
     
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
export class IdiComputerHardwareRoutingModule { }
