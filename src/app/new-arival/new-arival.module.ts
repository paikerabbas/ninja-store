import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArivalDashboardComponent } from './new-arival-dashboard/new-arival-dashboard.component';
import { NewArivalRoutingModule } from './new-arival-routing.module';



@NgModule({
  declarations: [
    NewArivalDashboardComponent
  ],
  imports: [
    CommonModule,
    NewArivalRoutingModule
  ]
})
export class NewArivalModule { }
