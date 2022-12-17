import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { DetailClientComponent } from './client/detail-client/detail-client.component';
import { HomeComponent } from './home/home.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { SaleComponent } from './sale/sale.component';
import { DetailSaleComponent } from './sale/detail-sale/detail-sale.component'

const routes = [
  {path: '', redirectTo: '/frmhome', pathMatch: 'full'},
  {path: 'frmhome', component: HomeComponent},
  {path: 'frmclient', component: ClientComponent},
  {path: 'client-detail/:id', component: DetailClientComponent},
  {path: 'frmorder', component: OrderComponent},
  {path: 'order-detail', component: OrderDetailComponent},
  {path: 'frmproduct', component: ProductComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: 'frmsale', component: SaleComponent},
  {path: 'sale-detail', component: DetailSaleComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'frmhome' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
