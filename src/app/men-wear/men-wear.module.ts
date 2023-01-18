import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenWearRoutingModule } from './men-wear-routing.module';
import { MenwearDashboardComponent } from './menwear-dashboard/menwear-dashboard.component';


@NgModule({
  declarations: [
    MenwearDashboardComponent
  ],
  imports: [
    CommonModule,
    MenWearRoutingModule
  ]
})
export class MenWearModule { }
