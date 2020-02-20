import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiComputerHardwareComponent } from './idi-computer-hardware.component';
import { IdiComputerHardwareRoutingModule } from './idi-computer-hardware-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [IdiComputerHardwareComponent],
  imports: [
    CommonModule,
    IdiComputerHardwareRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class IdiComputerHardwareModule { }
