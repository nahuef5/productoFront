import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/serv/producto.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{
  id:number;
  prod:Producto;
  constructor(private actRoute:ActivatedRoute,
    private serv:ProductoService, 
    private toastr:ToastrService,
    private ruta:Router) {}  
    ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    this.prod = new Producto();
    this.serv.detail(this.id).subscribe(dato => {
      this.prod = dato;
    },
    err =>{this.toastr.error(err.error.mensaje, 'Fail', {timeOut:2500
    });
    this.volver();
  }
  );   
  }


  volver(){
    this.ruta.navigate([''])
  }
}
