import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalnpifComponent } from './calnpif.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CalnpifRoutingModule } from './calnpif-routing.module';

@NgModule({
  declarations: [CalnpifComponent],
  imports: [
    CommonModule,
    CalnpifRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule
  ]
})
export class CalnpifModule { }
