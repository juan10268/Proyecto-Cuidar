import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia-general',
  templateUrl: './historia-general.component.html',
  styleUrls: ['./historia-general.component.scss']
})
export class HistoriaGeneralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  verAntecedentes() {
    console.log('Llega ver');
  }
  crearAntecedentes() {
  }
}
