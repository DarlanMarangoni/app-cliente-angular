import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from './clientes/cliente/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-Cliente';

  clientes: Object[] = [];

  constructor(clienteService: ClienteService){

    clienteService.listFromClientes().subscribe(clientes => this.clientes = clientes);
  }
}
