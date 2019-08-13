import { NgModule } from '@angular/core';
import { ClienteComponent } from './cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

    declarations: [ClienteComponent],
    exports: [ClienteComponent],
    imports: [HttpClientModule]
})
export class ClientesModule{}