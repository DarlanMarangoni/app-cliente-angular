import { NgModule } from '@angular/core';
import { InputMaskComponent } from './input-mask.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [InputMaskComponent],
    exports: [InputMaskComponent],
    imports: [CommonModule]
})
export class InputMaskModule{

}