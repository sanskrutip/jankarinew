import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComputerhardwareComponent } from './add-edit-computerhardware.component';
import { AddEditComputerhardwareRoutingModule } from './add-edit-computerhardware-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [AddEditComputerhardwareComponent],
  imports: [
    CommonModule,
    AddEditComputerhardwareRoutingModule,
    ReactiveFormsModule, FormsModule ,NgbModule,MatExpansionModule
  ]
})
export class AddEditComputerhardwareModule { }
