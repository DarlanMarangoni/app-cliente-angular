import { Component, Input } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { switchMap } from 'rxjs/operators';
import { ClienteListComponent } from '../cliente-list/cliente-list.component';

@Component({
    selector: 'ap-cliente',
    templateUrl: './cliente.component.html'
})
export class ClienteComponent{

    @Input() id=''
    @Input() nome='';
    @Input() cpf='';
    @Input() dataNascimento='';

    clientes$: Observable<Cliente[]>;

    constructor(private clienteService: ClienteService,
                private router: Router,
                private cli: ClienteListComponent ){

    }

    remove(id: string){
        this.cli.remove(id);
    }
}