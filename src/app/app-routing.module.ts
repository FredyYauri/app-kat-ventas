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
  {path: '', redirectTo: '/fclient', pathMatch: 'full'},
  {path: 'fclient', component: ClientComponent},
  {path: 'client-detail/:id', component: DetailClientComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-detail', component: OrderDetailComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path: 'sale', component: SaleComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'fclient' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
