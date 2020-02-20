import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaldetailsComponent } from './saldetails.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { SaldetailsRoutingModule } from './saldetails-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { MatButtonModule, MatDialogModule, MatTableModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatRadioModule, MatDividerModule, MatAutocompleteModule, MatChipsModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule, MatSortModule, MatPaginatorModule, MatCardModule, MatCheckboxModule, MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [SaldetailsComponent],
  imports: [
    CommonModule,
    SaldetailsRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,
    PageHeaderModule,StatModule,
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
export class SaldetailsModule { }

