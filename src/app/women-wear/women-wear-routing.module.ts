import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenwearDashboardComponent } from './womenwear-dashboard/womenwear-dashboard.component';


const routes: Routes = [
  { path: '', component: WomenwearDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomenWearRoutingModule { }
