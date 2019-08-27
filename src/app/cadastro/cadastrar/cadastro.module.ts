import { NgModule } from '@angular/core';
import { CadastrarComponent } from './cadastrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessagesModule } from 'src/app/components/vmessages/vmessages.module';
import { RouterModule } from '@angular/router';
import { InputMaskModule } from 'src/app/util/date/input-mask.module';
import { InputMaskDirectiveModule } from 'src/app/util/directive/input-mask-directive.module';

@NgModule({
    declarations: [CadastrarComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessagesModule,
        RouterModule,
        InputMaskModule,
        InputMaskDirectiveModule
    ] 
})
export class CadastroModule{

}