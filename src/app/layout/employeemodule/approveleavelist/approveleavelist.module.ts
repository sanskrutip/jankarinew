import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproveleavelistComponent } from './approveleavelist.component';
import { ApproveleavelistRoutingModule } from './approveleavelist-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatModule, PageHeaderModule } from 'src/app/shared';

@NgModule({
  declarations: [ApproveleavelistComponent],
  imports: [
    CommonModule,
    ApproveleavelistRoutingModule,
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule, PageHeaderModule,
    StatModule,
  ]
})
export class ApproveleavelistModule { }
