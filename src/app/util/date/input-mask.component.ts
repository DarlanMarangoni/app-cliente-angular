import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'ap-input-mask',
    templateUrl: './input-mask.component.html'
})
export class InputMaskComponent implements OnInit{
    
    @Input() text = '';
    @Input() mask = '';
    
    ngOnInit(): void {
        console.log(this.text)
    }
}