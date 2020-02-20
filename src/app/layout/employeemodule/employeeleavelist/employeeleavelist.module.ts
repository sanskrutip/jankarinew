import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeleavelistComponent } from './employeeleavelist.component';
import { EmployeeleavelistRoutingModule } from './employeeleavelist-routing.module';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [EmployeeleavelistComponent],
  imports: [
    CommonModule,
    EmployeeleavelistRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatIconModule,
    NgxPaginationModule
  ]
})
export class EmployeeleavelistModule { }
