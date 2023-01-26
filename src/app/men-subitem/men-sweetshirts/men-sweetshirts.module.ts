import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensweetshirtsDashboardComponent } from './mensweetshirts-dashboard/mensweetshirts-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: MensweetshirtsDashboardComponent }
];

@NgModule({
  declarations: [
    MensweetshirtsDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenSweetshirtsModule { }
