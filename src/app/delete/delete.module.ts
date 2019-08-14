import { NgModule } from '@angular/core';
import { DeletarComponent } from './deletar/deletar.component';
import { CommonModule } from '@angular/common';
import { VMessagesModule } from '../components/vmessages/vmessages.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [DeletarComponent],
    imports: [
        CommonModule,
        VMessagesModule,
        RouterModule
    ]
})
export class DeleteModule{

}