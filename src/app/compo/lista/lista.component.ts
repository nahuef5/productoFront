import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/serv/producto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  productoLista:Producto[];

  
  constructor(private proServ:ProductoService, private ruta:Router,
    private toastr:ToastrService){}
  ngOnInit(): void {
    this.view();
  }

  view(){
    this.proServ.lista().subscribe( dato =>{
      this.productoLista= dato;
    });
  }
  borrar(id:number){
    this.proServ.delete(id).subscribe(
      dato=>{
        this.toastr.success('Producto eliminado', '', {timeOut:2500});
      this.ruta.navigate(['/lista'])
      }
    );
  }
}
