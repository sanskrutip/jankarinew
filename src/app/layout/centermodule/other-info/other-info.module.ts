import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherInfoComponent } from './other-info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
import { OtherInfoRoutingModule } from './other-info-routing.module';

@NgModule({
  declarations: [OtherInfoComponent],
  imports: [
    CommonModule,
    OtherInfoRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class OtherInfoModule { }

