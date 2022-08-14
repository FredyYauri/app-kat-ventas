import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../service/client.service'
import { Client } from '../client/client'
import { Router } from '@angular/router';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {
  
  forma: FormGroup;

  constructor(private clientService: ClientService, private fb: FormBuilder, private router: Router) {
    this.crearFormulario();
    this.loadClient();
   }

  ngOnInit(): void {
  }

  crearFormulario(){
    //definimos el formulario
    this.forma = this.fb.group({
      nombres: [''],
      apellido: [''],
      telefono: [''],
      direccion: [''],
      correo: [''],
      listClient: this.fb.array([])
    });
  }
  
  clients: Client[];

  loadClient(){
    this.clientService.GetCLients().subscribe(response => {
      this.clients = response.clients;
    })
  }

  editClient(idClient: string){
    this.router.navigate(["client-detail", idClient]);
  }

}
