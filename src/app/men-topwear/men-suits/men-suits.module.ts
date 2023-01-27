import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensuitsDashboardComponent } from './mensuits-dashboard/mensuits-dashboard.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{ path: '', component: MensuitsDashboardComponent}
];
@NgModule({
  declarations: [
    MensuitsDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenSuitsModule { }
