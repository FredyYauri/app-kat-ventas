import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  forma: FormGroup;
  idProducto: String;
  producto :Product;

  constructor(private formBuilder: FormBuilder, 
    private activateRoute: ActivatedRoute,
     private productService: ProductService,
     private router: Router) {
    this.crearFormulario();
    this.cargarFormulario();
   }

  crearFormulario() {
    this.forma = this.formBuilder.group({
      idProduct: [''],
      name: [''],
      basePrice: [''],
      salePrice: [''],
      lot: ['0'],
      duration: [''],
      status: ['']
    })
  }

  cargarFormulario(){
    this.activateRoute.params.subscribe(parametro =>{
      this.idProducto = parametro['id'];
      if(this.idProducto.trim() != ""){
        this.obtenerProducto(this.idProducto);
      }
    })
  }
  obtenerProducto(idProducto: String) {
    this.productService.GetProductById(idProducto)
    .subscribe(response => {
      this.producto = response.products;
      return this.forma.patchValue(response.products);
    });
  }

  ngOnInit(): void {
  }

  guardar(){
    console.log("this.producto ", this.producto)
    console.log("this.forma.value ", this.forma.value)
    if(typeof this.producto != 'undefined' && this.producto ){
      this.productService.UpdateProduct(this.forma.value).subscribe(response =>{
        console.log("Actualizar ", response);
      });
    }else{
      this.productService.SaveProduct(this.forma.value).subscribe(response =>{
        console.log("Nuevo ", response);
      });
    }
    this.router.navigate(['/frmproduct'])
  }
}
