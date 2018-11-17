import { Component, OnInit } from '@angular/core';
import { Especialista } from '../../shared/Especialista/especialista.model';
import { EspecialistaService } from '../../shared/Especialista/especialista.service';
import { VinculacionService } from '../../shared/Vinculacion/vinculacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EspecialidadService } from '../../shared/Especialidad/especialidad.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actualizar-especialista',
  templateUrl: './actualizar-especialista.component.html',
  styleUrls: ['./actualizar-especialista.component.scss']
})
export class ActualizarEspecialistaComponent implements OnInit {

  especialista: Especialista;
  vinculacion: any[];
  especialidad:any[];
  especialistaID:number;
  especialistas: any[];

 

  constructor(private especialistaService: EspecialistaService,private toastr:ToastrService, private especialidadService: EspecialidadService,
    private vinculacionService:VinculacionService,private activatedRouter:ActivatedRoute,private router: Router
    ) { }

  ngOnInit() {
    this.getListaVinculacion();
    this.getEspecialidad(); this.activatedRouter.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      this.especialistaID = params["id"]
      this.getespecialistaporId();

      
    });
    
  }
  getespecialistaporId(){
   let especialista=this.especialistaID
    this.especialistaService.getEspecialistaid(especialista).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.especialistas = data;
    });
    
  }

  getListaVinculacion() {
    this.vinculacionService.getVinculacion().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.vinculacion = data;
    });
  }
  getEspecialidad() {
    this.especialidadService.getEspecialidades().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.especialidad = data;
    });
  }

  

  OnSubmit(form: NgForm) {
    console.log(form.value);
    this.especialistaService.editarEspecialista(form.value).subscribe((data: any) => {
        this.router.navigate(["/listarespecialista"]);
    });
    
  }
}
