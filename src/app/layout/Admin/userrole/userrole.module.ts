import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserroleComponent } from './userrole.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { UserroleRoutingModule } from './userrole-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UserroleComponent],
  imports: [
    CommonModule,
    UserroleRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule
  ]
})
export class UserroleModule { }
