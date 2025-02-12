import { Component } from '@angular/core';
import { Color, Hero } from '../../heroes.interfaces';

@Component({
  selector: 'page-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  public isUpperCase = false;
  public heroes: Hero[];
  public sortBy: keyof Hero = 'name';

  public changeOrder(value : keyof Hero) :void{
    console.log('Sort by'+value);

    this.sortBy = value;
  }
  constructor() {
    this.heroes = [
      {
        name: 'sueperman',
        canFly: true,
        color: Color.blue,
      },
      {
        name: 'batman',
        canFly: true,
        color: Color.black,
      },
      {
        name: 'sueperman',
        canFly: false,
        color: Color.blue,
      },
      {
        name: 'dareavil',
        canFly: true,
        color: Color.red,
      },
      {
        name: 'wonder girl',
        canFly: false,
        color: Color.red,
      },
      {
        name: 'robin',
        canFly: true,
        color: Color.greem,
      },
    ];
  }
  public toggleUperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

}
