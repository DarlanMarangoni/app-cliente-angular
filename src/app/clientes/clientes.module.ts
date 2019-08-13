import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

@NgModule({

    declarations: [
        ClienteComponent, 
        ClienteListComponent,
        ClienteFormComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class ClientesModule{}