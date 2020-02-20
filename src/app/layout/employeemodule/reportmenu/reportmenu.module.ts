import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportmenuComponent } from './reportmenu.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportmenuRoutingModule } from './reportmenu-routing.module';


@NgModule({
  declarations: [ReportmenuComponent],
  imports: [
    CommonModule,
    ReportmenuRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule
  ]
})
export class ReportmenuModule { }




