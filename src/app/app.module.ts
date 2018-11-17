import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PersonaComponent } from './persona/persona.component';
import { PacienteComponent } from './paciente/paciente.component';
import { appRutas } from './rutas';
import { EspecialistaComponent } from './especialista/especialista.component';
import { CitaComponent } from './cita/cita.component';
import { AgregarPersonaComponent } from './persona/agregar-persona/agregar-persona.component';
import { UrlRuta } from './shared/urlRuta';

import { PersonaService } from './shared/Persona/persona.service';
import { CiudadService } from './shared/Ciudad/ciudad.service';
import { DocumentoService } from './shared/Documento/documento.service';
import { EstadoCitaService } from './shared/EstadoCita/estado-cita.service';
import { CitaService } from './shared/Cita/cita.service';
import { EspecialistaService } from './shared/Especialista/especialista.service';
import { EspecialidadService } from './shared/Especialidad/especialidad.service';

import { ActualizarPersonaComponent } from './persona/actualizar-persona/actualizar-persona.component';
import { ListarPersonaComponent } from './persona/listar-persona/listar-persona.component';
import { AgregarPacienteComponent } from './paciente/agregar-paciente/agregar-paciente.component';
import { AgregarCitaComponent } from './cita/agregar-cita/agregar-cita.component';
import { AgregarEspecialistaComponent } from './especialista/agregar-especialista/agregar-especialista.component';
import { ListarEspecialistaComponent } from './especialista/listar-especialista/listar-especialista.component';
import { ActualizarEspecialistaComponent } from './especialista/actualizar-especialista/actualizar-especialista.component';
import { HistoriaGeneralComponent } from './historiaClinica/historia-general/historia-general.component';
import { ListarCitaComponent } from './cita/listar-cita/listar-cita/listar-cita.component';
import { PacienteService } from './shared/Paciente/paciente.service';
import { EstadoActivacionService } from './shared/Estado-Activacion/estado-activacion.service';
import { RangoSalarialService } from './shared/Rango-Salarial/rango-salarial.service';
import { DepartamentoService } from './shared/Departamento/departamento.service';
import { EstadoCivilService } from './shared/Estado-civil/estado-civil.service';
import { EscolaridadService } from './shared/Escolaridad/escolaridad.service';
import { VinculacionService } from './shared/Vinculacion/vinculacion.service';
import { ActualizarPacienteComponent } from './paciente/actualizar-paciente/actualizar-paciente.component';
import { ListarPacienteComponent } from './paciente/listar-paciente/listar-paciente.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonaComponent,
    PacienteComponent,
    EspecialistaComponent,
    CitaComponent,
    AgregarPersonaComponent,
    ActualizarPersonaComponent,
    ListarPersonaComponent,
    AgregarEspecialistaComponent,
    ListarEspecialistaComponent,
    ActualizarEspecialistaComponent,
    AgregarPacienteComponent,
    ListarPacienteComponent,
    ActualizarPacienteComponent,
    AgregarCitaComponent,
    PaginaInicioComponent   
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRutas)
  ],
  providers: [PersonaService, EspecialistaService, CitaService, UrlRuta, EstadoActivacionService, 
    EstadoCitaService, RangoSalarialService,DepartamentoService, CiudadService,EstadoCivilService, DocumentoService,PacienteService,VinculacionService,EscolaridadService,EspecialidadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
