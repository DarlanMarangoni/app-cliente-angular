import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputMaskDirectiveModule } from '../util/directive/input-mask-directive.module';

@NgModule({

    declarations: [
        ClienteComponent, 
        ClienteListComponent,
        ClienteFormComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        CommonModule, 
        RouterModule,
        InputMaskDirectiveModule
    ]
})
export class ClientesModule{}