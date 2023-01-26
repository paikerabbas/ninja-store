import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MennehrujacketsDashboardComponent } from './mennehrujackets-dashboard/mennehrujackets-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MennehrujacketsDashboardComponent }
];

@NgModule({
  declarations: [
    MennehrujacketsDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenNehrujacketsModule { }
