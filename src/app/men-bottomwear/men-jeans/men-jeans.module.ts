import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenjeansDashboardComponent } from './menjeans-dashboard/menjeans-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: MenjeansDashboardComponent }
];

@NgModule({
	declarations: [
		MenjeansDashboardComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class MenJeansModule { }
