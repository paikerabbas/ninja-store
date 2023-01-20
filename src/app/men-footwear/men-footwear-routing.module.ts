import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenFootwearDashboardComponent } from './menfootwear-dashboard/menfootwear-dashboard.component';

const routes: Routes = [
  { path: '', component: MenFootwearDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenFootwearRoutingModule { }