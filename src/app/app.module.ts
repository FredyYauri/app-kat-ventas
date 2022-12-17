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
import { HomeComponent } from './home/home.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { DetailSaleComponent } from './sale/detail-sale/detail-sale.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DetailClientComponent,
    ProductComponent,
    OrderComponent,
    SaleComponent,
    ProductDetailComponent,
    OrderDetailComponent,
    HomeComponent,
    DetailSaleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
