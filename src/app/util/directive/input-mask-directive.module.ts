import { NgModule } from "@angular/core";
import { InputMaskDirective } from './input-mask.directive';
import { CommonModule } from '@angular/common';
import { InputDateDirective } from './input-date.directive';

@NgModule({
    declarations: [InputMaskDirective, InputDateDirective],
    exports: [InputMaskDirective, InputDateDirective],
    imports: [CommonModule]
})
export class InputMaskDirectiveModule{
    
}