import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmprefrenceComponent } from './add-edit-emprefrence.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AddEditEmprefrenceRoutingModule } from './add-edit-emprefrence-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddEditEmprefrenceComponent],
  imports: [
    CommonModule,
    AddEditEmprefrenceRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule,NgbModule
  ]
})
export class AddEditEmprefrenceModule { }
