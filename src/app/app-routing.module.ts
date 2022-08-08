import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { DetailClientComponent } from './client/detail-client/detail-client.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { SaleComponent } from './sale/sale.component';

const routes = [
  {path: '', redirectTo: '/client', pathMatch: 'full'},
  {path: 'client', component: ClientComponent},
  {path: 'client-detail', component: DetailClientComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-detail', component: OrderDetailComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path: 'sale', component: SaleComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
