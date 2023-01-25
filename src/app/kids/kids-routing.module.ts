import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KidsDashboardComponent } from './kids-dashboard/kids-dashboard.component';

const routes: Routes = [
  { path: '', component: KidsDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
