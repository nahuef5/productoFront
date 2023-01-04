import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './compo/lista/lista.component';
import { DetalleComponent } from './compo/detalle/detalle.component';
import { NuevoComponent } from './compo/nuevo/nuevo.component';
import { EditarComponent } from './compo/editar/editar.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ProductoService } from './serv/producto.service';
import { ErrorComponent } from './compo/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalleComponent,
    NuevoComponent,
    EditarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    HttpClientModule, 
    FormsModule,
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
