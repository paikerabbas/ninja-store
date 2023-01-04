import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectProductRoutingModule } from './select-product-routing.module';
import { SelectProductPageComponent } from './select-product-page/select-product-page.component';


@NgModule({
  declarations: [
    SelectProductPageComponent
  ],
  imports: [
    CommonModule,
    SelectProductRoutingModule
  ]
})
export class SelectProductModule { }
