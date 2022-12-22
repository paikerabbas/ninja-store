import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkDashboardComponent } from './work-dashboard/work-dashboard.component';

const routes: Routes = [
  {path: '', component:WorkDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkWithUsRoutingModule { }
