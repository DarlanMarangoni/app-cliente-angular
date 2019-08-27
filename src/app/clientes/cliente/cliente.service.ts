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

    insert(cliente: Cliente){
        console.log(API + '/clientes/');
        console.log(cliente)
        return this.http.post(API + '/clientes', cliente);
    }

    delete(id: string){
        console.log(API + '/clientes/' + id);
        console.log(id)
        return this.http.delete(API + '/clientes/' + id);
    }

    update(id:string, cliente: Cliente){
        console.log(API + '/clientes/' + id);
        console.log(cliente)
        return this.http.put(API + '/clientes/' + id + cliente.id, cliente);
    }
}