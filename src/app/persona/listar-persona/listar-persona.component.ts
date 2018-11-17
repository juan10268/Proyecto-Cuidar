import { Component, OnInit } from '@angular/core';
import { Persona } from '../../shared/Persona/persona.model';
import { PersonaService } from '../../shared/Persona/persona.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ActualizarPersonaComponent } from '../actualizar-persona/actualizar-persona.component';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.scss']
})
export class ListarPersonaComponent implements OnInit {
  persona: any[];

  constructor(private personaService: PersonaService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getPersona();
  }
  getPersona() {
    this.personaService.getPersonas().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.persona = data;
    });
  }  
  getPersonaid(personaID) {
    console.log(personaID);
    this.personaService.getPersonasid(personaID).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.personaService.getListaPersonaID(data);
    });
  }
} 

