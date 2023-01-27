import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensherwanisDashboardComponent } from './mensherwanis-dashboard/mensherwanis-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: MensherwanisDashboardComponent }
];

@NgModule({
  declarations: [
    MensherwanisDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenSherwanisModule { }
