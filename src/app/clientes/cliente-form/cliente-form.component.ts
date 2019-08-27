import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ap-cliform',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})

export class ClienteFormComponent implements OnInit {

  editForm: FormGroup;
  cliente: Cliente;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService, 
    private activatedRoute : ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params.userId;    
    this.clienteService.user(userId).subscribe(cliente =>{
        this.cliente = new Cliente(cliente.id, cliente.nome, cliente.cpf, cliente.dataNascimento);
        console.log(this.cliente);
        
    });

    this.editForm = this.formBuilder.group({
      id: [''],
      nome: [''],
      cpf: [''],
      dataNascimento: ['']
    })
  }

  editar(){
    let newCliente: Cliente = new Cliente( this.editForm.get('id').value,
                                            this.editForm.get('nome').value, 
                                            this.editForm.get('cpf').value, 
                                            this.editForm.get('dataNascimento').value
    );
    if(this.editForm.get('nome').value == ''){
      newCliente.nome = this.cliente.nome;
    }
    if(!newCliente.cpf){
      console.log('eeee')
      newCliente.cpf = this.cliente.cpf;
    }
    if(this.editForm.get('dataNascimento').value == ''){
      newCliente.dataNascimento = this.cliente.dataNascimento;
    }
    console.log("editando" + this.cliente.id + newCliente.cpf);
    this.clienteService.update(this.cliente.id, newCliente)
    .subscribe(() => this.router.navigate(['clientes']));
  }
}
