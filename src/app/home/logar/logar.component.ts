import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ClienteService } from 'src/app/clientes/cliente/cliente.service';

@Component({
    templateUrl: './logar.component.html'
})
export class LogarComponent implements OnInit{
    
    logarForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder,
                private clienteService: ClienteService,
                private router: Router                                  
    ){
        
    }
    
    ngOnInit(): void {
        this.logarForm = this.formBuilder.group({
            userId: ['', Validators.required]
        });
    }

    buscar(){
        const userId = (this.logarForm.get('userId'));
        console.log(userId.value);

        this.clienteService.user(userId.value)
            .subscribe(() => this.router.navigate(['clientes/', userId.value]));
    }
}