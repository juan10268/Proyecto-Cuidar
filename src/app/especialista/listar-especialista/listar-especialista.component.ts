import { Component, OnInit } from '@angular/core';
import { EspecialistaService } from '../../shared/Especialista/especialista.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-especialista',
  templateUrl: './listar-especialista.component.html',
  styleUrls: ['./listar-especialista.component.scss']
})
export class ListarEspecialistaComponent implements OnInit {
  especialista: any[];

  constructor(private especialistaService: EspecialistaService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.getEspecialista();

  }

  getEspecialista() {
    this.especialistaService.getEspecialista().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.especialista = data;
    });
  }
  }


