import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmpsalaryComponent } from './add-edit-empsalary.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AddEditEmpsalaryRoutingModule } from './add-edit-empsalary-routing.module';


@NgModule({
  declarations: [AddEditEmpsalaryComponent],
  imports: [
    CommonModule,
    AddEditEmpsalaryRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class AddEditEmpsalaryModule { }
