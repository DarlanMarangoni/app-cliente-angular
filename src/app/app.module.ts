import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { CadastroModule } from './cadastro/cadastrar/cadastro.module';
import { DeleteModule } from './delete/delete.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    AppRoutingModule,
    ErrorsModule,
    HomeModule,
    CadastroModule,
    DeleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
