import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgregarPersonaComponent } from './persona/agregar-persona/agregar-persona.component';
import { ActualizarPersonaComponent } from './persona/actualizar-persona/actualizar-persona.component';
import { ListarPersonaComponent } from './persona/listar-persona/listar-persona.component';
import { AgregarEspecialistaComponent } from './especialista/agregar-especialista/agregar-especialista.component';
import { AgregarPacienteComponent } from './paciente/agregar-paciente/agregar-paciente.component';
import { ListarPacienteComponent } from './paciente/listar-paciente/listar-paciente.component';
import { ListarEspecialistaComponent } from './especialista/listar-especialista/listar-especialista.component';
import { ActualizarPacienteComponent } from './paciente/actualizar-paciente/actualizar-paciente.component';
import { AgregarCitaComponent } from './cita/agregar-cita/agregar-cita.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';

export const appRutas: Routes = [
  { path: '', redirectTo: '/home' , pathMatch: 'full' } ,
  { path: 'home', component: LoginComponent },
  { path: 'agregarpersona', component: AgregarPersonaComponent },
  { path: 'actualizarpersona/:id', component: ActualizarPersonaComponent },
  { path: 'listarpersona', component: ListarPersonaComponent},
  { path: 'agregarcita', component: AgregarCitaComponent},
  { path: 'agregarespecialista' , component: AgregarEspecialistaComponent },
  { path: 'agregarpaciente' , component: AgregarPacienteComponent },
  { path: 'actualizarpaciente/:id', component: ActualizarPacienteComponent },
  { path: 'listarpaciente' , component: ListarPacienteComponent },
  { path: 'listarespecialista' , component: ListarEspecialistaComponent },
  { path: 'paginainicio' , component: PaginaInicioComponent }
];
