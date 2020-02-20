import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { PageHeaderModule, StatModule } from '../../shared';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserProfileRoutingModule } from './user-profile-routing.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
