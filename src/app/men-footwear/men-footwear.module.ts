import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenFootwearRoutingModule } from './men-footwear-routing.module';
import { MenFootwearDashboardComponent } from './menfootwear-dashboard/menfootwear-dashboard.component';


@NgModule({
  declarations: [    
    MenFootwearDashboardComponent
  ],
  imports: [
    CommonModule,
    MenFootwearRoutingModule
  ]
})
export class MenFootwearModule { }
