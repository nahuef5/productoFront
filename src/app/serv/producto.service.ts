import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

private urlBackEnd='http://localhost:8080/producto';
  constructor(private httpClient: HttpClient) { }

  lista():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.urlBackEnd}/lista`);
  }
  detail(id: number):Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.urlBackEnd}/detail/${id}`);
  }
  detailname(nombre:string):Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.urlBackEnd}/detailname/${nombre}`);
  }

  create(producto:Producto):Observable<Object>{
    return this.httpClient.post<Object>(`${this.urlBackEnd}/create`, producto);
  }
  update(id:number, producto:Producto):Observable<Object>{
    return this.httpClient.put(`${this.urlBackEnd}/update/${id}`, producto);
  }
  delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.urlBackEnd}/delete/${id}`); 
  }
  
  
  
}
