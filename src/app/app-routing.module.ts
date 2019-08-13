import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';


const routes: Routes = [
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/id', component: ClienteFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
