import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchAccessoriesRoutingModule } from './watch-accessories-routing.module';
import { WatchaccessoriesDashboardComponent } from './watchaccessories-dashboard/watchaccessories-dashboard.component';


@NgModule({
  declarations: [
    WatchaccessoriesDashboardComponent
  ],
  imports: [
    CommonModule,
    WatchAccessoriesRoutingModule
  ]
})
export class WatchAccessoriesModule { }
