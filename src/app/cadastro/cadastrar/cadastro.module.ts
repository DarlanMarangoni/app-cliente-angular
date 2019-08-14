import { NgModule } from '@angular/core';
import { CadastrarComponent } from './cadastrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessagesModule } from 'src/app/components/vmessages/vmessages.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CadastrarComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessagesModule,
        RouterModule, 
        RouterModule
    ] 
})
export class CadastroModule{

}