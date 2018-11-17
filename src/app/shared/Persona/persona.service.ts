import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { UrlRuta } from '../urlRuta';
import { Observable } from 'rxjs';


@Injectable()
export class PersonaService {
  constructor(private http: HttpClient, private urlRuta: UrlRuta ) { }

  readonly route = this.urlRuta.getRuta();

  registrarPersona(persona: Persona) {
    const sendPersona: Persona = {
      personaID: persona.personaID,
      personaNombre: persona.personaNombre,
      personaApellido1: persona.personaApellido1,
      personaApellido2: persona.personaApellido2,
      personaFechaNacimiento: persona.personaFechaNacimiento,
      personaDireccion: persona.personaDireccion,
      personaTelefono: persona.personaTelefono,
      personaEstadoCivil: persona.personaEstadoCivil,
      personaGenero: persona.personaGenero,
      personaCiudad: persona.personaCiudad,
      personaTipoDocumento: persona.personaTipoDocumento,
      personaDepartamento : persona.personaDepartamento,
      personaEscolaridad: persona.personaEscolaridad
    };
    return this.http.post(this.route + '/api/Persona/Agregar', sendPersona);
  }
   validarIdentificacion(persona: Persona) {
     const personaID = persona.personaID;
     return this.http.get(this.route + '/api/Persona/getIdentificacion?id=' + personaID);
   }
   getPersonasid(personaID:number){   
    return this.http.get(this.route + '/api/Persona/getPersonasid?personaID='+ personaID);
   }
   getPersonas(){    
    return this.http.get(this.route + '/api/Persona/getPersonas');
   }
   getListaPersonaID(data){
    return data;
   }
   editarPersona(persona: Persona) {
    const sendPersona: Persona = {
      personaID: persona.personaID,
      personaNombre: persona.personaNombre,
      personaApellido1: persona.personaApellido1,
      personaApellido2: persona.personaApellido2,
      personaFechaNacimiento: persona.personaFechaNacimiento,
      personaDireccion: persona.personaDireccion,
      personaTelefono: persona.personaTelefono,
      personaEstadoCivil: persona.personaEstadoCivil,
      personaGenero: persona.personaGenero,
      personaCiudad: persona.personaCiudad,
      personaTipoDocumento: persona.personaTipoDocumento,
      personaDepartamento : persona.personaDepartamento,
      personaEscolaridad:persona.personaEscolaridad
    };
    return this.http.post(this.route + '/api/Persona/Editar', sendPersona);
  }
}
