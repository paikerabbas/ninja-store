import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenjacketsDashboardComponent } from './menjackets-dashboard/menjackets-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes:  Routes = [
  { path: '', component: MenjacketsDashboardComponent }
];


@NgModule({
  declarations: [
    MenjacketsDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenJacketsModule { }
