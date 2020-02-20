import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule, StatModule } from './../../shared';
import { MasterComponent } from './master.component';
import { MasterRoutingModule } from './master-routing.module';
import { MatCardModule, MatGridListModule, MatTableModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MasterComponent],
  imports: [
    CommonModule,
    MasterRoutingModule, PageHeaderModule,
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
export class MasterModule { }


