import { Injectable } from '@angular/core';
import { Especialista } from './especialista.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlRuta } from '../urlRuta';

@Injectable()
export class EspecialistaService {
  constructor(private urlRuta: UrlRuta, private http: HttpClient) { }

  readonly route = this.urlRuta.getRuta();

  registrarEspecialista(especialista: Especialista) {
    const sendEspecialista: Especialista = {
      especialistaId:especialista.especialistaId,
      especialidadId:especialista.especialidadId,
     tipo_vinculacion:especialista.tipo_vinculacion,
      especialistaFechaIngreso:especialista.especialistaFechaIngreso,
      especialistaFechaRetiro:especialista.especialistaFechaRetiro,
      

    };
    return this.http.post(this.route + '/api/Especialista/Agregar', sendEspecialista);
  }
  getEspecialista(){
    const reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.get(this.route + '/api/Especialista/getEspecialista');
   }
   editarEspecialista(especialista: Especialista) {
    const sendEspecialista: Especialista = {
      especialistaId:especialista.especialistaId,
      especialidadId:especialista.especialidadId,
     tipo_vinculacion:especialista.tipo_vinculacion,
      especialistaFechaIngreso:especialista.especialistaFechaIngreso,
      especialistaFechaRetiro:especialista.especialistaFechaRetiro,
      

    };
    return this.http.post(this.route + '/api/Especialista/Editar', sendEspecialista);
  }
  getEspecialistaid(personaID:number){   
    return this.http.get(this.route + '/api/Especialista/getEspecialistaid?especialistaID='+ personaID);
   }
}
