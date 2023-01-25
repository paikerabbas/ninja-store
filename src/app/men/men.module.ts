import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenRoutingModule } from './men-routing.module';
import { MenDashboardComponent } from './men-dashboard/men-dashboard.component';


@NgModule({
  declarations: [
    MenDashboardComponent
  ],
  imports: [
    CommonModule,
    MenRoutingModule
  ]
})
export class MenModule { }
