import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenDashboardComponent } from './men-dashboard/men-dashboard.component';

const routes: Routes = [
  { path: '', component: MenDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenRoutingModule { }
