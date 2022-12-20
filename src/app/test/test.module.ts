import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestDashboardComponent } from './test-dashboard/test-dashboard.component';


@NgModule({
  declarations: [
  
    TestDashboardComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
