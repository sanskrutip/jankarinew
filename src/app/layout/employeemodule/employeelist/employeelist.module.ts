import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeelistComponent } from '../employeelist/employeelist.component';

import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeelistRoutingModule } from './employeelist-routing.module';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { MatSortModule, MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import {  MatTooltipModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [EmployeelistComponent],
  imports: [
    CommonModule,
    EmployeelistRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule,MatSortModule,   MatButtonModule,
    MatIconModule,MatTooltipModule,NgbModule,MatProgressSpinnerModule,MatSelectModule
  ]
})
export class EmployeelistModule { }




