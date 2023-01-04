import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectProductPageComponent } from './select-product-page/select-product-page.component';

const routes: Routes = [
  { path: '', component: SelectProductPageComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectProductRoutingModule { }
