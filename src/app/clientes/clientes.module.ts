import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { RouterModule } from '@angular/router';
import { DeleteModule } from '../delete/delete.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputMaskModule } from '../util/date/input-mask.module';
import { InputMaskDirective } from '../util/directive/input-mask.directive';
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
        DeleteModule,
        InputMaskDirectiveModule
    ]
})
export class ClientesModule{}