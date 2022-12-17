import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service'
import { Product } from './product';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private router: Router) { 
    
  }

  loadProducts() {
    this.productService.GetProducts()
    .subscribe(response => {
      this.products = response.products;
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  editarProducto(idProduct: String){
    this.router.navigate(['/product-detail', idProduct]);
  }

  eliminarProducto(producto: Product){
    producto.status = "0";
    this.productService.UpdateProduct(producto).subscribe(response =>{
      this.ngOnInit();
    });
  }

}
