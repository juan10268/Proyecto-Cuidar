import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlRuta } from '../urlRuta';

@Injectable()
export class EstadoCivilService {
  constructor(private http: HttpClient, private urlRuta: UrlRuta) { }

  readonly route = this.urlRuta.getRuta();

  getEstadocivil() {
    const reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.get(this.route + '/api/EstadoCivil/getEstadoCivil', { headers: reqHeader });
  }
}
