import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerempattlistComponent } from './perempattlist.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PerempattlistRoutingModule } from './perempattlist-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
@NgModule({
  declarations: [PerempattlistComponent],
  imports: [
    CommonModule,
    PerempattlistRoutingModule, 
    PageHeaderModule,
    StatModule,Ng2Charts,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
 
  ]
})
export class PerempattlistModule { }








