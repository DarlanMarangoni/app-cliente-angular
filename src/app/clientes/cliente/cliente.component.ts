import { Component, Input } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-cliente',
    templateUrl: './cliente.component.html'
})
export class ClienteComponent{

    @Input() id=''
    @Input() nome='';
    @Input() cpf='';
    @Input() dataNascimento='';

    constructor(private clienteService: ClienteService,
                private router: Router  ){

    }

    remove(id: string){
        this.clienteService.delete(id).subscribe(() => this.router.navigate(['']));
    }
}