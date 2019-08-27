import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';
import { Router } from '@angular/router';
import { switchMap, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'ap-clilist',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  title = 'app-Cliente';

  clientes$: Observable<Cliente[]>;

  constructor(private clienteService: ClienteService, private router: Router){

  }
  
  ngOnInit(): void{
    this.clientes$ = this.clienteService.listFromClientes();
     
  }

  remove(id){
  this.clientes$ = this.clienteService
      .delete(id)
      .pipe(switchMap(() => this.clienteService.listFromClientes()))
      .pipe(tap(() =>{
        alert('cliente excluido com sucesso');
      }));
      
  }
}
