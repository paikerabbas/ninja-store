import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenwatchDashboardComponent } from './menwatch-dashboard/menwatch-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MenwatchDashboardComponent }
];

@NgModule({
  declarations: [
    MenwatchDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenWatchModule { }
