import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre: string;
  apellidos: string;
  telefono: string;
  correo: string;
  edad: string;
  sexo: string;

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  agregarUsuario() {
    this.usuarioService.agregarUsuario(
      new Usuario(this.nombre,
                  this.apellidos,
                  this.telefono,
                  this.correo,
                  this.edad,
                  this.sexo));
    this.limpiarCampos();
  }

  limpiarCampos(){
    this.nombre = "";
    this.apellidos = "";
    this.telefono = "";
    this.correo = "";
    this.edad = "";
    this.sexo = "";
  }
}
