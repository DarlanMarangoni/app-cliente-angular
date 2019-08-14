import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/clientes/cliente/cliente.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/clientes/cliente/cliente';

@Component({
    selector: 'app-cadastrar',
    templateUrl: './cadastrar.component.html'
})
export class CadastrarComponent implements OnInit{

    cadastrarForm: FormGroup;
    cliente: Cliente;
    
    constructor(private formBuilder: FormBuilder,
                private clienteService: ClienteService,
                private router: Router  
    ){

    }
    
    ngOnInit(): void {
        this.cadastrarForm = this.formBuilder.group({
            id: [''],
            nome: ['', Validators.required],
            cpf: ['', Validators.required],
            dataNascimento: ['', Validators.required]
        });
    }

    cadastrar(){
        this.cliente = new Cliente( this.cadastrarForm.get('id').value,
                                    this.cadastrarForm.get('nome').value,
                                    this.cadastrarForm.get('cpf').value,
                                    this.cadastrarForm.get('dataNascimento').value
        
        );

        console.log('cadastrando' + this.cliente.nome);
        this.clienteService.insert(this.cliente)
            .subscribe(() => this.router.navigate(['clientes']));
    }

}