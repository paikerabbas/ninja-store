import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenRoutingModule } from './women-routing.module';
import { WomenDashboardComponent } from './women-dashboard/women-dashboard.component';


@NgModule({
  declarations: [
    WomenDashboardComponent
  ],
  imports: [
    CommonModule,
    WomenRoutingModule
  ]
})
export class WomenModule { }
