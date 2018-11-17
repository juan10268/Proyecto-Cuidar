import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../shared/Paciente/paciente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.scss']
})
export class ListarPacienteComponent implements OnInit {
  paciente:any []

  constructor(private pacienteService: PacienteService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.getPacientes();

  }

  getPacientes() {
    this.pacienteService.getPacientes().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.paciente = data;
    });
  }

}
