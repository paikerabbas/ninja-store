import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDashboardComponent } from './test-dashboard/test-dashboard.component';

const routes: Routes = [
  { path: '', component: TestDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
