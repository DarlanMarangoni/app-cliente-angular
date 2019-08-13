import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

const API = 'http://localhost:8082';

@Injectable({providedIn: 'root'})
export class ClienteService{

    constructor(private http: HttpClient){

    }

    listFromClientes(){
        return this.http.get<Cliente[]>(API + '/clientes');
    }

    user(userId: string){
        console.log(API + '/clientes/' + userId);
        return this.http.get<Cliente>(API + '/clientes/' + userId);
    }
}