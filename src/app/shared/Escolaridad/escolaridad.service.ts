import { Injectable } from '@angular/core';
import { UrlRuta } from '../urlRuta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class EscolaridadService {

  constructor(private http: HttpClient, private urlRuta: UrlRuta) { }

  readonly route = this.urlRuta.getRuta();

  getEscolaridad() {
    const reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.get(this.route + '/api/Escolaridades/getEscolaridades', { headers: reqHeader });
  }
}
