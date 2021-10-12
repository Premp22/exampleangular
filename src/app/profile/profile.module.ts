import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    AddComponent,
    UpdateComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, ReactiveFormsModule],
})
export class ProfileModule {}
