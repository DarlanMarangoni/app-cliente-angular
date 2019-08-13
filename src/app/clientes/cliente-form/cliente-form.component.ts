import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-cliform',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})

export class ClienteFormComponent implements OnInit {
  cliente: Cliente;

  constructor(
    private clienteService: ClienteService, 
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params.userId;
    this.clienteService.user(userId).subscribe(cliente =>{
        this.cliente = new Cliente(cliente.id, cliente.nome, cliente.cpf, cliente.dataNascimento);
        console.log(this.cliente);
    });
  }
}
