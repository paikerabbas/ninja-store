import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MendhotisDashboardComponent } from './mendhotis-dashboard/mendhotis-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MendhotisDashboardComponent }
];

@NgModule({
  declarations: [
    MendhotisDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenDhotisModule { }
