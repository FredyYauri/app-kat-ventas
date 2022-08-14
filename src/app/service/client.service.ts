import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Client } from '../client/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  public GetCLients(){
    return this.httpClient.get<any>("/client");
  }

  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})

  public SaveClient(client: Client){
    return this.httpClient.post("/client", client, {headers: this.httpHeaders})
  }

  public GetClient(idClient: string){
    return this.httpClient.get<any>("/client/" + idClient)
  }

  public UpdateClient(client: Client){
    return this.httpClient.put("/client", client, {headers: this.httpHeaders})
  }
}
