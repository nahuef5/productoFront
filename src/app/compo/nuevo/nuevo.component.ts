import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/serv/producto.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private proServ:ProductoService,
              private toastr :ToastrService,
              private ruta:Router){}

  nuevo:Producto=new Producto();    
  

  onCreate():void{
    
    this.proServ.create(this.nuevo).subscribe( dato=>{
      this.toastr.success('Producto creado', 'Ok', {timeOut:2500});
      this.ruta.navigate(['/lista'])
    },
    err=>{
      this.toastr.error(err.error.mensaje, 'Fail', {timeOut:2500});
      this.ruta.navigate(['/error'])});
  }

}
