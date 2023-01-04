import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/serv/producto.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{
producto:Producto=new Producto();
id:number;
constructor(private proServ:ProductoService,
  private activateR:ActivatedRoute,
  private toastr:ToastrService,
  private ruta:Router){}
  ngOnInit(): void {
    this.id = this.activateR.snapshot.params['id'];
    this.proServ.detail(this.id).subscribe( dato=>{
      this.producto=dato;
    })
  }
  onUpdate():void{
    
    this.proServ.update(this.id, this.producto).subscribe( dato=>{
      this.toastr.success('Producto actualizado', 'Ok', {timeOut:2500});
      this.ruta.navigate(['/lista']);
    },
    err=>{
      this.toastr.error(err.error.mensaje, "Fail",{timeOut:2500});
      this.ruta.navigate(['/lista'])
    })
  }
}
