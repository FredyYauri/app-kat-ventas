import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { Client } from '../client';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html'
})
export class DetailClientComponent implements OnInit {
  forma: FormGroup;
  idClient: string;
  private client: Client = new Client();

  constructor(private clientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
    this.crearFormulario();
    this.cargarFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    //definimos el formulario
    this.forma = this.formBuilder.group({
      idClient: [''],
      name: [''],
      lastName: [''],
      phone: [''],
      address: [''],
      email: ['']
    });
  }

  cargarFormulario(){
    this.activatedRoute.params.subscribe(parametro => {
      this.idClient = parametro['id'];
      if (this.idClient.trim() != '')
        this.obtenerCliente(this.idClient);
    });
  }

  public guardar(): void {
    if (typeof this.client != 'undefined' && this.client) {
      this.clientService.UpdateClient(this.forma.value).subscribe(
        response => this.router.navigate(['/client'])
      );
    } else {
      this.clientService.SaveClient(this.forma.value).subscribe(
        response => this.router.navigate(['/client'])
      )
    }
  }

  public obtenerCliente(idClient: string) {
    this.clientService.GetClient(idClient).subscribe(response => {
      this.forma.patchValue(response.client);
    }
    )
  }
}
