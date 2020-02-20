import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalUbsAddEditComphardwareComponent } from './cal-ubs-add-edit-comphardware.component';


const routes: Routes = [
  { 
      path: '',
      component: CalUbsAddEditComphardwareComponent,
     
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CalUbsAddEditComphardwareRoutingModule { }
