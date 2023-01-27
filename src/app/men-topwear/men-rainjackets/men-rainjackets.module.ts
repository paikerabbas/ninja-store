import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenrainjacketDashboardComponent } from './menrainjacket-dashboard/menrainjacket-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
	{ path: '', component: MenrainjacketDashboardComponent }
];


@NgModule({
  declarations: [
    MenrainjacketDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenRainjacketsModule { }
