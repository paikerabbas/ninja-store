import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenkurtasComponent } from './menkurtas/menkurtas.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: MenkurtasComponent }
];

@NgModule({
  declarations: [
    MenkurtasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenKurtasModule { }
