import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramwisesalaryComponent } from './programwisesalary.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProgramwisesalaryRoutingModule } from './programwisesalary-routing.module';
@NgModule({
  declarations: [ProgramwisesalaryComponent],
  imports: [
    CommonModule,
    ProgramwisesalaryRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule

  ]
})
export class ProgramwisesalaryModule { }
