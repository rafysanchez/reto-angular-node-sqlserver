import {Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { Cliente } from './app.component'
import { Solicitud } from './app.component'
import { Credito } from './app.component'
import {CreditoCliente} from './app.component'

@Injectable()
export class PostService {
  IP: string = "localhost";
  constructor(private http: HttpClient){}

  getPost(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://'+this.IP+':8080/cliente');
  }
  
  insertCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://'+this.IP+':8080/cliente/create', cliente);
  }

  getCredito(): Observable<Credito[]> {
    return this.http.get<Credito[]>('http://'+this.IP+':8080/credito');
  }
  
  insertCredito(credito: Credito): Observable<Credito> {
    return this.http.post<Credito>('http://'+this.IP+':8080/credito/create', credito);
  }


  insertSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.post<Solicitud>('http://'+this.IP+':8080/solicitud/create', solicitud);
  }

  buscarClientePorCedula(cedula:string){
    return this.http.get('http://'+this.IP+':8080/cliente/cedula/'+cedula);
  }

  getCreditosPorCedula(cedula:string):Observable<CreditoCliente[]>{
    return this.http.get<CreditoCliente[]>('http://'+this.IP+':8080/credito/cedula/'+cedula);
  }

}
