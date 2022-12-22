import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkWithUsRoutingModule } from './work-with-us-routing.module';
import { WorkDashboardComponent } from './work-dashboard/work-dashboard.component';


@NgModule({
  declarations: [
    WorkDashboardComponent
  ],
  imports: [
    CommonModule,
    WorkWithUsRoutingModule
  ]
})
export class WorkWithUsModule { }
