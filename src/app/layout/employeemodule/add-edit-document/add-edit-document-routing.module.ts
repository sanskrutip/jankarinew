import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditDocumentComponent } from './add-edit-document.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      component: AddEditDocumentComponent
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
export class AddEditDocumentRoutingModule { }
