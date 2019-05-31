import { Injectable } from '@angular/core';
import { Usuario } from '../Usuario';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios = new Subject<Usuario>();
  usuarios$ = this.usuarios.asObservable();
  
  constructor() {}

  agregarUsuario(usuario: Usuario){
    this.usuarios.next(usuario);
  }
}
