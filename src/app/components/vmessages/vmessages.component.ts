import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-vmessages',
    templateUrl: './vmessages.component.html'
})
export class VMessagesComponent{

    @Input() msg = '';
}