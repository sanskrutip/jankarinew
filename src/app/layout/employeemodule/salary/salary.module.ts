import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SalaryRoutingModule } from './salary-routing.module';
import { MatProgressButtonsModule } from 'mat-progress-buttons';


@NgModule({
  declarations: [SalaryComponent],
  imports: [
    CommonModule,
    SalaryRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule,MatProgressButtonsModule
  ]
})
export class SalaryModule { }



