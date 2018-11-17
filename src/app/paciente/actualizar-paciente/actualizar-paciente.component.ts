import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../shared/Paciente/paciente.service';
import { RangoSalarialService } from '../../shared/Rango-Salarial/rango-salarial.service';
import { VinculacionService } from '../../shared/Vinculacion/vinculacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EstadoActivacionService } from '../../shared/Estado-Activacion/estado-activacion.service';
import { Paciente } from '../../shared/Paciente/paciente.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.scss']
})
export class ActualizarPacienteComponent implements OnInit {

  paciente: Paciente;
  pacientes: any[];
  rangosalarial: any[];
  vinculaciones:any[];
  estadoactivacion:any[];
  pacienteID:number

  constructor(private pacienteService: PacienteService,
    private rangosalarialService: RangoSalarialService, private estadoactivacioService: EstadoActivacionService,
    private vinculacionService: VinculacionService,private activatedRouter:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.getListaVinculacion();
    this.getEstadoActivacion();
    this.getRangoSalarial();

    this.activatedRouter.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      this.pacienteID = params["id"]
      this.getpacienteporId();

      
    });
    
  }
  getpacienteporId(){
   let paciente=this.pacienteID
    this.pacienteService.getPacienteid(paciente).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.pacientes = data;
    });
    
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
    this.pacienteService.editarPaciente(form.value).subscribe((data: any) => {
      /*if (data.Succeeded === true) {
        this.resetForm(form);
      } else {
        this.toastr.success('User Fail');
      }*/
      this.router.navigate(["/listarpaciente"]);
    });
  }
}
