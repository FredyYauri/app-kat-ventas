import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { ClientService } from '../../service/client.service'
import { Client } from '../../client/client'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Product } from '../../product/product';
import { computeMsgId } from '@angular/compiler';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { Venta } from '../../sale/venta' 
import {MatDialog} from '@angular/material/dialog';
import * as jQuery from 'jquery';


@Component({
  selector: 'app-detail-sale',
  templateUrl: './detail-sale.component.html',
  styleUrls: ['./detail-sale.component.css']
})
export class DetailSaleComponent implements OnInit {

  clientesList: Client[] = [];
  productosList: Product[] = [];
  formGroup: FormGroup;
  clientSelected: Client;
  constructor(private clientService: ClientService,
    private formBuild: FormBuilder,
    private productoService: ProductService,
    public dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef) { 
    this.crearFormulario();
    this.cargarClientes();
    this.cargarProductos();
    
  }
  crearFormulario() {
    this.formGroup = this.formBuild.group({
      client: [],
      producto: [],
      cantidad: []
    })
  }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['idProducto', 'producto', 'cantidad', 'precioUnidad', 'precioTotal', 'eliminar'];
  ventas: Venta[] = []

  dataSource = new ExampleDataSource(this.ventas);

  cargarClientes() {
    this.clientService.GetCLients().subscribe(response => {
      this.clientesList = response.clients;
    })
  }

  cargarProductos() {
    this.productoService.GetProducts().subscribe(response => {
      this.productosList = response.products;
    })
  }

  calcularTotales() {
    return this.ventas.map(t => t.precioTotal).reduce((acumulado, precio) => acumulado + precio);
  }

  agregarProducto() {   
    if(this.validateProduct()){
      this.ventas.push({
        idProducto: this.formGroup.value.producto,
        producto: this.productosList.filter(p => {
          return p.idProduct == this.formGroup.value.producto
        })[0].name,
        cantidad: this.formGroup.value.cantidad,
        precioUnidad: Number(this.productosList.find(p => p.idProduct == this.formGroup.value.producto).salePrice),
        precioTotal: this.formGroup.value.cantidad * Number(this.productosList.find(p => p.idProduct == this.formGroup.value.producto).salePrice)
      })
      this.dataSource.setData(this.ventas);
    } 
  }

  
  validateProduct() {
    console.log('validateProduct')
    jQuery('#exampleModal').show();


    /** Validar si existe producto */
    if(!this.formGroup.value.producto){

    }
    return false;
  }

  eliminarItem(producto: Venta){
    this.ventas.forEach((value, index) => {
      if(value == producto){
        this.ventas.splice(index, 1);
      }
    });
    this.dataSource.setData(this.ventas);
  }

  guardarVenta(){
    console.log("datasource: ",this.ventas);
  }

  showDataClient(){
    if(this.clientSelected){
      this.ventas = [];
      this.dataSource.setData(this.ventas);
      this.formGroup.value.producto = -1;
      this.formGroup.value.cantidad = "";
    }
      
    this.clientSelected = this.clientesList.find(client => client.idClient == this.formGroup.value.client);
  }

}



class ExampleDataSource extends DataSource<Venta> {
  private _dataStream = new ReplaySubject<Venta[]>();

  constructor(initialData: Venta[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Venta[]> {
    return this._dataStream;
  }

  disconnect() { }

  setData(data: Venta[]) {
    this._dataStream.next(data);
  }

}