import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfraDetailsComponent } from './infra-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
import { InfraDetailsRoutingModule } from './infra-details-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [InfraDetailsComponent],
  imports: [
    CommonModule,
    InfraDetailsRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule,NgbModule
  ]
})
export class InfraDetailsModule { }
