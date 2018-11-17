import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlRuta } from '../urlRuta';

@Injectable()
export class EspecialidadService {

  constructor(private http: HttpClient, private urlRuta: UrlRuta) { }

  readonly route = this.urlRuta.getRuta();

  getEspecialidades() {
    const reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.get(this.route + '/api/Especialidades/getEspecialidades', { headers: reqHeader });
  }
}
