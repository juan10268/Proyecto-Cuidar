import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlRuta } from '../urlRuta';

@Injectable()
export class EstadoActivacionService {
  constructor(private http: HttpClient, private urlRuta: UrlRuta) { }

readonly route = this.urlRuta.getRuta();

getEstadoactivacion() {
  const reqHeader = new HttpHeaders({'No-Auth': 'True'});
  return this.http.get(this.route + '/api/EstadoActivacion/getEstadoActivacion', { headers: reqHeader });
}
}
