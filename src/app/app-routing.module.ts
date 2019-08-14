import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LogarComponent } from './home/logar/logar.component';
import { CadastrarComponent } from './cadastro/cadastrar/cadastrar.component';
import {  DeletarComponent } from './delete/deletar/deletar.component';


const routes: Routes = [
  { path: '', component: LogarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'clientes/deletar', component: DeletarComponent },
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/:userId', component: ClienteFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
