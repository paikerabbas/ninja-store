import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenwearDashboardComponent } from './menwear-dashboard/menwear-dashboard.component';

const routes: Routes = [
  { path: '', component: MenwearDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenWearRoutingModule { }
