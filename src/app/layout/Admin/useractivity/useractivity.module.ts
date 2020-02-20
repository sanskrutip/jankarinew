import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseractivityComponent } from './useractivity.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UseractivityRoutingModule } from './useractivity-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [UseractivityComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,UseractivityRoutingModule,NgxPaginationModule
  ]
})
export class UseractivityModule { }







