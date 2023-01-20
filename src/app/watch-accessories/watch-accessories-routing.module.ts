import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchaccessoriesDashboardComponent } from './watchaccessories-dashboard/watchaccessories-dashboard.component';

const routes: Routes = [
  { path: '', component: WatchaccessoriesDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchAccessoriesRoutingModule { }
