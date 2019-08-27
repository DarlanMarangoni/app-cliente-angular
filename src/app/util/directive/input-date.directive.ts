import { Directive, ElementRef, Renderer, HostListener  } from '@angular/core';


@Directive({
    selector: '[input-date]'
})
export class InputDateDirective{

    keys = [];

    constructor(private el: ElementRef, private render: Renderer){

    }

    @HostListener('keyup', ['$event'])
    keyupOn($event: any){
        if($event.keyCode > 47 && $event.keyCode <= 57){
            this.keys.push($event.key);
            if((this.keys.length == 2 || this.keys.length == 5)){   
                this.keys.push('/');  
                $event.target.value = $event.target.value.concat('/')
            }
            
        }else{ 
            if($event.keyCode == 8 || $event.keyCode == 46){
                this.keys = [];
                for(let i = 0; i < $event.target.value.length; i++){
                    this.keys.push(i);
                }
            }else{
                    $event.target.value = $event.target.value.replace($event.key, '');
            }
        }
    }

    
}