import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArivalDashboardComponent } from './new-arival-dashboard/new-arival-dashboard.component';

const routes: Routes = [
    {  path: '' , component: NewArivalDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewArivalRoutingModule { }