import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmpprogramComponent } from './add-edit-empprogram.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AddEditEmpprogramRoutingModule } from './add-edit-empprogram-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [AddEditEmpprogramComponent],
  imports: [
    CommonModule,
    AddEditEmpprogramRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule,NgbModule
  ]
})
export class AddEditEmpprogramModule { }
