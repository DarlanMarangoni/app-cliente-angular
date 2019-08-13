import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-Cliente';

  clientes: Object[] = [];

  constructor(http: HttpClient){
    http
      .get<Object[]>('http://localhost:8082/clientes')
      .subscribe(clientes => {
        console.log(clientes);
        this.clientes = clientes
    });
  }
}
