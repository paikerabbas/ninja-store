import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeautyDashboardComponent } from './beauty-dashboard/beauty-dashboard.component';

const routes: Routes = [
  { path: '', component: BeautyDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeautyRoutingModule { }
