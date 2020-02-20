import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuserdetailsComponent } from './auserdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatModule, PageHeaderModule } from 'src/app/shared';
import { AuserdetailsRoutingModule } from './auserdetails-routing.module';


@NgModule({
  declarations: [AuserdetailsComponent],
  imports: [
    CommonModule,
    AuserdetailsRoutingModule,
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule, PageHeaderModule,
    StatModule,
  ]
})
export class AuserdetailsModule { }




