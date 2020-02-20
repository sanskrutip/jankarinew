import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendemailComponent } from './sendemail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '', component:  SendemailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SendemailRoutingModule { }
