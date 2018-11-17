import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../shared/Persona/persona.service';
import { NgForm } from '@angular/forms';
import { Persona } from '../../shared/Persona/persona.model';
import { ToastrService } from 'ngx-toastr';
import { DocumentoService } from '../../shared/Documento/documento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CiudadService } from '../../shared/Ciudad/ciudad.service';
import { EscolaridadService } from '../../shared/Escolaridad/escolaridad.service';
import { DepartamentoService } from '../../shared/Departamento/departamento.service';
import { EstadoCivilService } from '../../shared/Estado-civil/estado-civil.service';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.scss']
})
export class ActualizarPersonaComponent implements OnInit {
  persona: Persona;
  personas:any[];
  ciudades: any[];
  documentos: any[];
  escolaridades: any[];
  personaID: number;
  departamentos:any[];
  estadocivil:any[];
 

  constructor(private personaService: PersonaService, private toastr: ToastrService,
    private ciudadService: CiudadService, private documentoService: DocumentoService, private router: Router,    
    private escolaridadservice:EscolaridadService, private activatedRouter:ActivatedRoute,private departamentoService: DepartamentoService,private estadocivilService:EstadoCivilService)
    {      
  }
  ngOnInit() {
    this.resetForm();
    this.getListaCiudades();
    this.getListaDocumentos();
    this.getListaEscolaridad()
    this.getDepartamentos();
    this.getEstadocivil();

    this.activatedRouter.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      this.personaID = params["id"]
      this.getpersonaporId();

      
    });
    
  }
  getpersonaporId(){
   let persona=this.personaID
    this.personaService.getPersonasid(persona).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.personas = data;
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
  getListaCiudades() {
    this.ciudadService.getCiudades().subscribe((data: any) => {
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
  getListaEscolaridad() {
    this.escolaridadservice.getEscolaridad().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.escolaridades = data;
    });
  }  
  listarPersonaSeleccionada(persona){
    this.personas = persona;
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
    this.personaService.editarPersona(form.value).subscribe((data: any) => {
     /* if (data.success) {
        this.resetForm(form);
      } else {
        
        this.toastr.success('User Fail');
      }*/
      this.router.navigate(["/listarpersona"]);
    });
  }
  getCuidadDepartamento(personaDepartamento){
    this.ciudadService.getCiudadDepartamento(personaDepartamento).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.ciudades = data;
    });
  }
}
