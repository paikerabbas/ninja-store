import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerDashboardComponent } from './career-dashboard/career-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CareerDashboardComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    SharedModule
  ]
})
export class CareerModule { }
