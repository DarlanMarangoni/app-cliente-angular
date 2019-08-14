import { NgModule } from '@angular/core';
import { LogarComponent } from './logar/logar.component';
import {ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { VMessagesModule } from '../components/vmessages/vmessages.module';

@NgModule({
    declarations: [LogarComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessagesModule
    ] 
})
export class HomeModule{

}