import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MencasualshoesDashboardComponent } from './mencasualshoes-dashboard/mencasualshoes-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: MencasualshoesDashboardComponent }
];

@NgModule({
	declarations: [
		MencasualshoesDashboardComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class MenCasualshoesModule { }
