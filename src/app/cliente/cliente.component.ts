import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-cliente',
    templateUrl: './cliente.component.html'
})
export class ClienteComponent{

    @Input() id=''
    @Input() nome='';
    @Input() cpf='';
    @Input() dataNascimento='';
}