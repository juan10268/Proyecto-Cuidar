import { Component, OnInit } from '@angular/core';
import { Especialista } from '../../shared/Especialista/especialista.model';
import { EspecialistaService } from '../../shared/Especialista/especialista.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VinculacionService } from '../../shared/Vinculacion/vinculacion.service';
import { EspecialidadService } from '../../shared/Especialidad/especialidad.service';

@Component({
  selector: 'app-agregar-especialista',
  templateUrl: './agregar-especialista.component.html',
  styleUrls: ['./agregar-especialista.component.scss']
})
export class AgregarEspecialistaComponent implements OnInit {
  especialista: Especialista;
  vinculacion: any[];
  especialidad:any[];

 

  constructor(private especialistaService: EspecialistaService,private toastr:ToastrService, private especialidadService: EspecialidadService,
    private vinculacionService:VinculacionService,private router: Router
    ) { }

  ngOnInit() {
    this.getListaVinculacion();
    this.getEspecialidad();

   
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
    this.especialistaService.registrarEspecialista(form.value).subscribe((data: any) => {
        this.router.navigate(["/listarespecialista"]);
    });
    
  }
}