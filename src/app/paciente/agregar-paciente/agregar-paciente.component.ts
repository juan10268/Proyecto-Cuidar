import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../shared/Paciente/paciente.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { DocumentoService } from '../../shared/Documento/documento.service';
import { CiudadService } from '../../shared/Ciudad/ciudad.service';
import { Paciente } from '../../shared/Paciente/paciente.model';
import { VinculacionService } from '../../shared/Vinculacion/vinculacion.service';
import { Router } from '@angular/router';
import { EstadoActivacionService } from '../../shared/Estado-Activacion/estado-activacion.service';
import { RangoSalarialService } from '../../shared/Rango-Salarial/rango-salarial.service';

@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  styleUrls: ['./agregar-paciente.component.scss']
})
export class AgregarPacienteComponent implements OnInit {

  paciente: Paciente;
  ciudades: any[];
  rangosalarial: any[];
  vinculaciones:any[];
  estadoactivacion:any[];

  constructor(private pacienteService: PacienteService, private toastr: ToastrService,
    private rangosalarialService: RangoSalarialService, private estadoactivacioService: EstadoActivacionService,
    private vinculacionService: VinculacionService,private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.getListaVinculacion();
    this.getEstadoActivacion();
    this.getRangoSalarial();
  }

  getListaVinculacion() {
    this.vinculacionService.getVinculacion().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.vinculaciones = data;
    });
  }
  getEstadoActivacion(){
    this.estadoactivacioService.getEstadoactivacion().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.estadoactivacion=data;
    });
  }
  getRangoSalarial(){
    this.rangosalarialService.getRangoSalarial().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.rangosalarial=data;
    });
  }
  
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.paciente = {
        activacionId:0,
        vinculacionTipoId: 0,
        fecharetiro:"",
        personasId:0,
        fechaingreso:"",
        rangosalario:0
      };
    }
  }
  OnSubmit(form: NgForm) {
    console.log(form.value);
    this.pacienteService.registrarPaciente(form.value).subscribe((data: any) => {
      /*if (data.Succeeded === true) {
        this.resetForm(form);
      } else {
        this.toastr.success('User Fail');
      }*/
      this.router.navigate(["/listarpaciente"]);
    });
  }
  ciudadSeleccionada(index) {
    this.ciudades[index].selected = !this.ciudades[index].selected;
    console.log(index);
  }
}

