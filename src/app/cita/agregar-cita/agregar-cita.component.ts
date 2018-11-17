import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cita } from '../../shared/Cita/cita.model';
import { CitaService } from '../../shared/Cita/cita.service';
import { EstadoCitaService } from '../../shared/EstadoCita/estado-cita.service';
import { EspecialistaService } from '../../shared/Especialista/especialista.service';
import { EspecialidadService } from '../../shared/Especialidad/especialidad.service';
import { PacienteService } from '../../shared/Paciente/paciente.service';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.scss']
})
export class AgregarCitaComponent implements OnInit {
  cita: Cita; 
  estadosCita: any[];
  listaEspecialista: any[];
  listaEspecialidad: any[];
  idCita: number;
  infoPaciente: any[];

  constructor(private citaService: CitaService, private toastr: ToastrService,
    private estadoCitaService: EstadoCitaService, private especialistaService: EspecialistaService,
    private especialidadService: EspecialidadService, private pacienteService: PacienteService) { }
    
  ngOnInit() {
    this.getIdCita();
    this.resetForm();
  }
  getInfoPaciente(pacienteID) {
   /* this.pacienteService.getInfoPaciente(pacienteID).subscribe((data: any) => {
      this.GetEspecialidades();
      this.infoPaciente = data;
    });*/
  }
  getIdCita() {
    this.citaService.getIDCita().subscribe((data: number) => {
      this.idCita = data;
    });
  }
  getEstadoCita() {
    this.estadoCitaService.getEstadoCita().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.estadosCita = data;
      console.log(data);
    });
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
  }
  GetEspecialistaPorEspecialidad(especialidadId) {
    /*this.especialistaService.GetEspecialistaPorEspecialidad(especialidadId).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.listaEspecialista = data;
    });*/
  }
  GetEspecialidades() {
    this.especialidadService.getEspecialidades().subscribe((data: any ) => {
      data.forEach(obj => obj.selector = false);
      this.listaEspecialidad = data;
    });
  }
  OnSubmit(form: NgForm) {
    this.citaService.registrarCita(form.value).subscribe((data: any) => {
      if (data = true) {
        this.resetForm(form);
      } else {
        this.toastr.success('User Fail');
      }
    });
  }
}

