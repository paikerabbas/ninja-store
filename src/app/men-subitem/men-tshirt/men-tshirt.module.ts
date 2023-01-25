import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentshirtDashboardComponent } from './mentshirt-dashboard/mentshirt-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: MentshirtDashboardComponent }
];

@NgModule({
	declarations: [
		MentshirtDashboardComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class MenTshirtModule { }
