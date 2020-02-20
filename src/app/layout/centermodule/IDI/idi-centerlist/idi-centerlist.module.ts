import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiCenterlistComponent } from './idi-centerlist.component';
import { IdiCenterlistRoutingModule } from './idi-centerlist-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [IdiCenterlistComponent],
  imports: [
    CommonModule,
    IdiCenterlistRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class IdiCenterlistModule { }
