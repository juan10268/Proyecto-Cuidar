import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlRuta } from '../urlRuta';
import { Paciente } from './paciente.model';

@Injectable()
export class PacienteService {
  constructor(private http: HttpClient, private urlRuta: UrlRuta ) { }


  readonly route = this.urlRuta.getRuta();

  registrarPaciente(paciente: Paciente) {
    const sendPaciente: Paciente = {
      rangosalario:paciente.rangosalario,
      vinculacionTipoId:paciente.vinculacionTipoId,
      personasId:paciente.personasId,
      fechaingreso:paciente.fechaingreso,
      fecharetiro:paciente.fecharetiro,
      activacionId:paciente.activacionId

    };
    return this.http.post(this.route + '/api/Paciente/Agregar', sendPaciente);
  }
  getPacientes(){
    const reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.get(this.route + '/api/Paciente/getPacientes');
   }
   
   editarPaciente(paciente: Paciente) {
    const sendPaciente: Paciente = {
      rangosalario:paciente.rangosalario,
      vinculacionTipoId:paciente.vinculacionTipoId,
      personasId:paciente.personasId,
      fechaingreso:paciente.fechaingreso,
      fecharetiro:paciente.fecharetiro,
      activacionId:paciente.activacionId

    };
    return this.http.post(this.route + '/api/Paciente/Editar', sendPaciente);
  }
  getPacienteid(personaID:number){   
    return this.http.get(this.route + '/api/Paciente/getPacientesid?pacienteID='+ personaID);
   }
}
