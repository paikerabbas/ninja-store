import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MencasualshirtDashboardComponent } from './mencasualshirt-dashboard/mencasualshirt-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MencasualshirtDashboardComponent }
];

@NgModule({
  declarations: [
    MencasualshirtDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenCasualShirtModule { }
