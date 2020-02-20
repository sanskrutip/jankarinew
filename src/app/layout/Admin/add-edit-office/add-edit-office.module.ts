import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditOfficeComponent } from '../add-edit-office/add-edit-office.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AddEditOfficeRoutingModule } from './add-edit-office-routing.module';

@NgModule({
  declarations: [AddEditOfficeComponent],
  imports: [
    CommonModule,
    AddEditOfficeRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class AddEditOfficeModule { }
