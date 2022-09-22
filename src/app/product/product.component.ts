import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service'
import { Product } from './product';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private router: Router) { 
    this.loadProducts();
  }

  loadProducts() {
    this.productService.GetProducts()
    .subscribe(response => {
      this.products = response.products
      console.log(this.products);
    });
  }

  ngOnInit(): void {
  }

  editarProducto(idProduct: String){
    this.router.navigate(['/product-detail', idProduct]);
  }

}
