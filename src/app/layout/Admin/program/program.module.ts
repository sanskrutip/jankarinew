import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from '../program/program.component';

import { PageHeaderModule, StatModule } from 'src/app/shared';
import { ProgramRoutingModule } from './program-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ProgramComponent],
  imports: [
    CommonModule,
    ProgramRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule
  ]
})
export class ProgramModule { }

