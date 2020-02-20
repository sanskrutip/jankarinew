import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyleaveComponent } from './applyleave.component';
import { ApplyleaveRoutingModule } from './applyleave-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination'; 
@NgModule({
  declarations: [ApplyleaveComponent],
  imports: [
    CommonModule,
    ApplyleaveRoutingModule,
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule
  ]
})
export class ApplyleaveModule { }
