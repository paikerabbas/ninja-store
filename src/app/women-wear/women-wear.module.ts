import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenWearRoutingModule } from './women-wear-routing.module';
import { WomenwearDashboardComponent } from './womenwear-dashboard/womenwear-dashboard.component';


@NgModule({
  declarations: [
    WomenwearDashboardComponent
  ],
  imports: [
    CommonModule,
    WomenWearRoutingModule
  ]
})
export class WomenWearModule { }
