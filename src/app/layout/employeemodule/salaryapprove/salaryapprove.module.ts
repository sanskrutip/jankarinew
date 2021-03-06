import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryapproveComponent } from './salaryapprove.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { SalaryapproveRoutingModule } from './salaryapprove-routing.module';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule, MatDialogModule, MatPaginatorModule, MatSortModule, MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule, MatGridList, MatGridListModule, MatDividerModule, MatAutocompleteModule, MatChipsModule, MatFormFieldModule, MatGridTile, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule } from '@angular/material';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';


@NgModule({
  declarations: [SalaryapproveComponent],
  imports: [
    CommonModule,
    SalaryapproveRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule,MatProgressButtonsModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,
    MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule,
  MatDialogModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule,
  MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatDividerModule ,
  MatGridListModule,FormsModule, ReactiveFormsModule,
  MatInputModule,MatRadioModule,CdkTreeModule,CdkTableModule,CdkStepperModule,ScrollingModule,PortalModule,
  DragDropModule,A11yModule
  ]
  
})
export class SalaryapproveModule { }





