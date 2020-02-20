import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComputerhardwareComponent } from './add-edit-computerhardware.component';


const routes: Routes = [
  { 
      path: '',
      component: AddEditComputerhardwareComponent,
     
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditComputerhardwareRoutingModule { }
