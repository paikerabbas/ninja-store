import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenformalshirtDashboardComponent } from './menformalshirt-dashboard/menformalshirt-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: MenformalshirtDashboardComponent }
];

@NgModule({
	declarations: [
		MenformalshirtDashboardComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class MenFormalShirtModule { }
