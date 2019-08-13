import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:8082';

@Injectable({providedIn: 'root'})
export class ClienteService{

    constructor(private http: HttpClient){

    }

    listFromClientes(){
        return this.http.get<Object[]>(API + '/clientes');
    }
}