import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveEscalationComponent } from './leave-escalation.component';
import { LeaveEscalationRoutingModule } from './leave-escalation-routing.module';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule, MatDialogModule, MatPaginatorModule, MatSortModule, MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule, MatDividerModule, MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatRadioModule, MatGridListModule } from '@angular/material';
import { MatProgressButtonsModule } from 'mat-progress-buttons';

@NgModule({
  declarations: [LeaveEscalationComponent],
  imports: [
    CommonModule,
    LeaveEscalationRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule,
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule,NgbModule,
    MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule,
    MatDialogModule, MatPaginatorModule, MatSortModule,
    MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule,
    MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatDividerModule,
    MatGridListModule ,FormsModule, ReactiveFormsModule,
    MatInputModule,MatRadioModule,MatProgressButtonsModule,
  ]
})
export class LeaveEscalationModule { }
