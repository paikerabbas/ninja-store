import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeautyRoutingModule } from './beauty-routing.module';
import { BeautyDashboardComponent } from './beauty-dashboard/beauty-dashboard.component';


@NgModule({
  declarations: [
    BeautyDashboardComponent
  ],
  imports: [
    CommonModule,
    BeautyRoutingModule
  ]
})
export class BeautyModule { }
