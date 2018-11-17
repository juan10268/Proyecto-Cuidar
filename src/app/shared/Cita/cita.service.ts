import { Injectable } from '@angular/core';
import { Cita } from './cita.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlRuta } from '../urlRuta';

@Injectable()
export class CitaService {
  constructor(private http: HttpClient, private urlRuta: UrlRuta ) { }

  readonly route = this.urlRuta.getRuta();

  registrarCita(cita: Cita) {
    const sendCita: Cita = {
      pacienteID: cita.pacienteID,
      especialistaID: cita.especialistaID,
      citaID: cita.citaID,
      citaFecha: cita.citaFecha,
      citaHora: cita.citaHora,
      estadoCita: cita.estadoCita
    };
    console.log(this.http.post(this.route + '/api/Cita/Agregar', sendCita));
    return this.http.post(this.route + '/api/Cita/Agregar', sendCita);
  }
  getCitaPersona(personaID) {
    return this.http.get(this.route + '/api/Cita/CitaPersona?pacienteID=' + personaID);
  }
  getDetalleCitaPersona(citaID) {
    return this.http.get(this.route + '/api/Cita/DetalleCita?idCita=' + citaID);
  }
  getIDCita() {
    return this.http.get(this.route + '/api/Cita/GetIDCita');
  }
}
