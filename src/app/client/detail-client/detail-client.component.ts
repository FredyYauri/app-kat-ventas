import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { Client } from '../client';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html'
})
export class DetailClientComponent implements OnInit {
  forma: FormGroup;
  private client: Client = new Client();

  constructor(private clientService: ClientService, private router: Router, private formBuilder: FormBuilder) {
    this.crearFormulario()
   }

  ngOnInit(): void {
  }

  
  crearFormulario(){
    //definimos el formulario
    this.forma = this.formBuilder.group({
      name: [''],
      lastName: [''],
      phone: [''],
      address: [''],
      email: ['']
    });
  }

  public guardar(): void {
    this.clientService.SaveClient(this.forma.value).subscribe(
      response => this.router.navigate(['/client'])
    )
  }


}
