import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  usuarios: Array<Usuario>;
  
  constructor(private usuarioService: UsuarioService) { 
    this.usuarios = new Array<Usuario>(); 
  }

  ngOnInit() {
    this.usuarioService.usuarios$.subscribe(usuario => {
        this.usuarios.push(usuario);
    });
  }

}
