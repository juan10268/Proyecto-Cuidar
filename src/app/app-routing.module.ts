import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { AgregarCitaComponent } from './cita/agregar-cita/agregar-cita.component';
import { AgregarPacienteComponent } from './paciente/agregar-paciente/agregar-paciente.component';
import { LoginComponent } from './login/login.component';
import { AgregarEspecialistaComponent } from './especialista/agregar-especialista/agregar-especialista.component';
import { ActualizarEspecialistaComponent } from './especialista/actualizar-especialista/actualizar-especialista.component';
import { ListarEspecialistaComponent } from './especialista/listar-especialista/listar-especialista.component';
import { ListarPersonaComponent } from './persona/listar-persona/listar-persona.component';
import { ListarPacienteComponent } from './paciente/listar-paciente/listar-paciente.component';
import { AgregarPersonaComponent } from './persona/agregar-persona/agregar-persona.component';
import { ActualizarPersonaComponent } from './persona/actualizar-persona/actualizar-persona.component';


const routes: Routes = [
  { path:'home', component: LoginComponent},
  { path:'pagina-inicio', component: PaginaInicioComponent},
  { path:'agregar-cita', component: AgregarCitaComponent},
  { path:'agregar-paciente', component: AgregarPacienteComponent},
  { path:'agregar-especialista', component: AgregarEspecialistaComponent},
  { path:'actualizar-especialista', component: ActualizarEspecialistaComponent},
  { path:'listar-especialista', component: ListarEspecialistaComponent},
  { path:'listar-persona', component: ListarPersonaComponent },
  { path:'listar-paciente', component: ListarPacienteComponent },
  { path:'agregar-persona', component: AgregarPersonaComponent },
  { path:'actualizar-persona', component: ActualizarPersonaComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

