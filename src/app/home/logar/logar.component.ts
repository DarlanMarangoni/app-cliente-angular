import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './logar.component.html'
})
export class LogarComponent implements OnInit{
    
    logarForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder){
        
    }
    
    ngOnInit(): void {
        this.logarForm = this.formBuilder.group({
            userId: ['', Validators.required]
        });
    }
}