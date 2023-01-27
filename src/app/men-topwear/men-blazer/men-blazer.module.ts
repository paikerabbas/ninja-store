import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenblazerDashboardComponent } from './menblazer-dashboard/menblazer-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: MenblazerDashboardComponent }
];

@NgModule({
  declarations: [
    MenblazerDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenBlazerModule { }
