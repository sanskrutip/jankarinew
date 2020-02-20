import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';

import { PageHeaderModule, StatModule } from './../../shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatGridListModule, MatTableModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationRoutingModule } from './notification-routing.module';
@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    PageHeaderModule,
    MatGridListModule,
      MatCardModule,
      MatTableModule,
      MatButtonModule,
      StatModule,
      MatIconModule,
      FlexLayoutModule.withConfig({addFlexToParent: false}),
      FormsModule, ReactiveFormsModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule
  ]
})
export class NotificationModule { }
