import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensweatshirtDashboardComponent } from './mensweatshirt-dashboard/mensweatshirt-dashboard.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: MensweatshirtDashboardComponent }
];

@NgModule({
  declarations: [
    MensweatshirtDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenSweatshirtModule { }
