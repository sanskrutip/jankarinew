import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from './userdetails.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserdetailsRoutingModule } from './userdetails-routing.module';


@NgModule({
  declarations: [UserdetailsComponent],
  imports: [
    CommonModule,
    UserdetailsRoutingModule, 
   
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule
  ]
})
export class UserdetailsModule { }




