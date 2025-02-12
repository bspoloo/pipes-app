import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  //recibe un valor de cualquier tipo
  transform(value: string, toUpper : boolean = true) : string{
    if(!toUpper){
      return value;
    }
    return value.toUpperCase()
  }

}
