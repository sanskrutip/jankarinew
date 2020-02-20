import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmpqulificationComponent } from './add-edit-empqulification.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AddEditEmpqulificationRoutingModule } from './add-edit-empqulification-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddEditEmpqulificationComponent],
  imports: [
    CommonModule,
    AddEditEmpqulificationRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule,NgbModule
  ]
})
export class AddEditEmpqulificationModule { }
