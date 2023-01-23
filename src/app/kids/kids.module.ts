import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';
import { KidsDashboardComponent } from './kids-dashboard/kids-dashboard.component';


@NgModule({
  declarations: [
    KidsDashboardComponent
  ],
  imports: [
    CommonModule,
    KidsRoutingModule
  ]
})
export class KidsModule { }
