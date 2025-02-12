import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform{
  transform(value: boolean) {
    return value ? 'Yes can Fly' : 'NO can Fly'
  }
}
