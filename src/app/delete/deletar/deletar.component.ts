import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from 'src/app/clientes/cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './deletar.component.html'
})
export class DeletarComponent implements OnInit{

    constructor(){

    }

    ngOnInit(): void {
        
    }

}