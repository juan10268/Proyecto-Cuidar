import { Component, OnInit } from '@angular/core';
import { EspecialistaService } from '../shared/Especialista/especialista.service';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.scss']
})
export class EspecialistaComponent implements OnInit {
  listaEspecialista: any[];

  constructor() { }

  ngOnInit() {
  }
}
