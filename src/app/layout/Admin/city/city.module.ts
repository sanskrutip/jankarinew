import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from '../city/city.component';
import { CityRoutingModule } from './city-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule, StatModule } from 'src/app/shared';

@NgModule({
  declarations: [CityComponent],
  imports: [
    CommonModule,
    CityRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule
  ]
})
export class CityModule { }

