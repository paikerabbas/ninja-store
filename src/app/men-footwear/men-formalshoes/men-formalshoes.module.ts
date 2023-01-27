import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenformalshoesDashboardComponent } from './menformalshoes-dashboard/menformalshoes-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: MenformalshoesDashboardComponent }
];

@NgModule({
	declarations: [
		MenformalshoesDashboardComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class MenFormalshoesModule { }
