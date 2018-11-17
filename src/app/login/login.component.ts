import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/Usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private usuarioServicio: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(usuarioID, usuarioContraseña) {
  }

  onChange(usuarioID) {
    console.log(usuarioID);
  }

}
