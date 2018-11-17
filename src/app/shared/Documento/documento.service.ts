import { Injectable } from '@angular/core';
import { UrlRuta } from '../urlRuta';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DocumentoService {
  constructor(private http: HttpClient, private urlRuta: UrlRuta) { }

  readonly route = this.urlRuta.getRuta();

  getDocumentos() {
    const reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.get(this.route + '/api/Documento/getDocumentos', { headers: reqHeader });
  }
}
