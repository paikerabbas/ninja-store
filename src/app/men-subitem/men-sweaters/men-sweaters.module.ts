import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensweatersDashboardComponent } from './mensweaters-dashboard/mensweaters-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: MensweatersDashboardComponent }
];

@NgModule({
  declarations: [
    MensweatersDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenSweatersModule { }
