import { Component, OnInit } from '@angular/core';
import { NgForm, NgControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../../shared/Persona/persona.model';
import { PersonaService } from '../../shared/Persona/persona.service';
import { CiudadService } from '../../shared/Ciudad/ciudad.service';
import { DocumentoService } from '../../shared/Documento/documento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EscolaridadService } from '../../shared/Escolaridad/escolaridad.service';
import { DepartamentoService } from '../../shared/Departamento/departamento.service';
import { EstadoCivilService } from '../../shared/Estado-civil/estado-civil.service';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.scss']
})
export class AgregarPersonaComponent implements OnInit {
  persona: Persona;
  ciudades: any[];
  documentos: any[];
  escolaridades: any[];
  personas:Persona[];
  departamentos:any[];
  estadocivil:any[];
  form:NgForm;

  

  constructor(private personaService: PersonaService, private toastr: ToastrService,
    private ciudadService: CiudadService, private documentoService: DocumentoService, private router: Router,
     private escolaridadservice: EscolaridadService,private departamentoService: DepartamentoService, private estadocivilService:EstadoCivilService ) { }
     personaID: number;
     modoEdicion: boolean=false;
  ngOnInit() {
    this.resetForm();
    this.getListaCiudades();
    this.getListaDocumentos();
    this.getListaEscolaridad();
    this.getDepartamentos();
    this.getEstadocivil();
   }
  getListaCiudades() {
     this.ciudadService.getCiudades().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.ciudades = data;
    });
  }
  getCuidadDepartamento(personaDepartamento){
    this.ciudadService.getCiudadDepartamento(personaDepartamento).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.ciudades = data;
    });

  }
  getListaDocumentos() {
    this.documentoService.getDocumentos().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.documentos = data;
    });
  }
  getDepartamentos(){
    this.departamentoService.getDepartamentos().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.departamentos = data;
    });
  }
  getEstadocivil(){
    this.estadocivilService.getEstadocivil().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.estadocivil = data;
    });
  }

  getListaEscolaridad() {
    this.escolaridadservice.getEscolaridad().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.escolaridades = data;
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.persona = {
        personaID: 0,
        personaNombre: '',
        personaApellido1: '',
        personaApellido2: '',
        personaFechaNacimiento: '',
        personaDireccion: '',
        personaTelefono: '',
        personaEstadoCivil: 0,
        personaGenero: 0,
        personaCiudad: 0,
        personaTipoDocumento: 0,
        personaDepartamento:0,
        personaEscolaridad:0
      };
    }
  }
  OnSubmit(form: NgForm) {
    
    console.log(form.value);
      this.personaService.registrarPersona(form.value).subscribe((data: any) => {
        /* if (data.success) {
           this.resetForm(form);
         } else {
           
           this.toastr.success('User Fail');
         }*/
         this.router.navigate(["/listarpersona"]);
       });
    
   
   
  }
}

