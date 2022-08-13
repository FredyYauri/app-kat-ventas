import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { RouterModule } from '@angular/router';
import { DetailClientComponent } from './client/detail-client/detail-client.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { SaleComponent } from './sale/sale.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DetailClientComponent,
    ProductComponent,
    OrderComponent,
    SaleComponent,
    ProductDetailComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
