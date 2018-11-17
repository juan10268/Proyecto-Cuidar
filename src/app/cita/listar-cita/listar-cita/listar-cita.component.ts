import { Component, OnInit, EventEmitter } from '@angular/core';
import 'materialize-css';
import 'angular2-materialize';
//import { MaterializeAction } from 'angular2-materialize';   

import { CitaService } from '../../../shared/Cita/cita.service';
import { PacienteService } from '../../../shared/Paciente/paciente.service';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.scss']
})
export class ListarCitaComponent implements OnInit {
  infoPaciente: any[];
  tablaCitaPaciente: any[];
  detallesCita: any[];
  model1Params = [ {
    dismissible: false,
    complete: function () { console.log('Closed'); }
  }];
  //modalActions1 = new EventEmitter<string | MaterializeAction>();

  constructor(private pacienteService: PacienteService, private citaService: CitaService) { }

  ngOnInit() {  }

  buscarPaciente(pacienteID) {
    /*this.infoCitaPaciente(pacienteID);
    this.pacienteService.getInfoPaciente(pacienteID).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.infoPaciente = data;
    });*/
  }
  infoCitaPaciente(pacienteID) {
    this.citaService.getCitaPersona(pacienteID).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.tablaCitaPaciente = data;
    });
  }
  citaDetalles(citaID) {
    this.openModal();
    this.citaService.getDetalleCitaPersona(citaID).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.detallesCita = data;
    });
  }
  openModal() {
    //this.modalActions1.emit({ action: 'modal', params: ['open'] });
  }
  closeModal() {
    //this.modalActions1.emit({ action: 'modal', params: ['close'] });
  }
}
