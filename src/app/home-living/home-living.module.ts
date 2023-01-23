import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLivingRoutingModule } from './home-living-routing.module';
import { HomelivingDashboardComponent } from './homeliving-dashboard/homeliving-dashboard.component';


@NgModule({
  declarations: [
    HomelivingDashboardComponent
  ],
  imports: [
    CommonModule,
    HomeLivingRoutingModule
  ]
})
export class HomeLivingModule { }
