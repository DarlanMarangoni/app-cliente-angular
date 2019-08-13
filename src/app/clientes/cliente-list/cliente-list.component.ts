import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'ap-clilist',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  title = 'app-Cliente';

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService){

  }
  
  ngOnInit(): void{
    this.clienteService.listFromClientes().subscribe(clientes => {
        this.clientes = clientes;
        console.log(this.clientes);
    });
  }
}
