import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlRuta } from '../urlRuta';

@Injectable()
export class CiudadService {
  constructor(private http: HttpClient, private urlRuta: UrlRuta) { }

  readonly route = this.urlRuta.getRuta();

  getCiudades() {
    const reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.get(this.route + '/api/Ciudades/getCiudades', { headers: reqHeader });
  }
  getCiudadDepartamento( DepartamentoID:number ){
    return this.http.get(this.route + '/api/Ciudades/getCiudadesPorDepartamento?DepartamentoID='+ DepartamentoID);
  }
  }

