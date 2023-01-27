import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensportsshoesDashboardComponent } from './mensportsshoes-dashboard/mensportsshoes-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MensportsshoesDashboardComponent }
];

@NgModule({
  declarations: [
    MensportsshoesDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenSportsshoesModule { }
