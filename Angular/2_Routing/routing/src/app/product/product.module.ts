import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent, ProductHomeComponent, ProductDetailComponent]
})
export class ProductModule { }
