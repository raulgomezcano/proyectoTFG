import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Route, Router, Routes } from '@angular/router';
import { Usuario } from '../clases/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url:String = "http://localhost:8080/usuarios"


  constructor(private http:HttpClient, private router: Router) { }

  insert(user:any):Observable<any>{
    return this.http.post(`${this.url}`,user)
  }
  
  inicioSesion(email: string, clave: string):Observable<Usuario>
  {
      return this.http.get<Usuario>(`${this.url}/${email}/${clave}`)
  }
  modificaUsuario(us: Usuario){

  }
}
