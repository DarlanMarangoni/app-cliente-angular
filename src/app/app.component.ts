import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from './clientes/cliente/cliente.service';
import { Cliente } from './clientes/cliente/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-Cliente';

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService){

  }
  
  ngOnInit(): void{
    this.clienteService.listFromClientes().subscribe(clientes => {
        this.clientes = clientes;
    });
    
  }
}
