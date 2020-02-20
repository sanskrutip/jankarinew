import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreatecalnpifComponent } from './createcalnpif.component';


const routes: Routes = [
  { 
      path: '',
      component: CreatecalnpifComponent,
     
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
export class CreatecalnpifRoutingModule { }

