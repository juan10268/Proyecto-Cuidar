import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlRuta } from '../urlRuta';

@Injectable()
export class RangoSalarialService {
  constructor(private http: HttpClient, private urlRuta: UrlRuta) { }

readonly route = this.urlRuta.getRuta();

getRangoSalarial() {
  const reqHeader = new HttpHeaders({'No-Auth': 'True'});
  return this.http.get(this.route + '/api/RangoSalarial/getRangoSalarial', { headers: reqHeader });
}
}
