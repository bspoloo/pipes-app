import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor() {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes in Angular',
        icon: PrimeIcons.ALIGN_LEFT,
        items:[
          {
            label: 'Text and date',
            icon: PrimeIcons.ALIGN_LEFT,
            routerLink: 'basic page'
          },
          {
            label: 'Numbers',
            icon: PrimeIcons.DOLLAR,
            routerLink: 'numbers'
          },
          {
            label: 'No commons',
            icon: PrimeIcons.CIRCLE,
            routerLink: 'uncommon'
          },
          {
            label:'Custom Pipes',
            icon: PrimeIcons.CALENDAR,
            routerLink: 'order'
          }
        ]
      },
      {
        label: 'Personalized pipes',
        icon: PrimeIcons.AMAZON,
      },
    ];
  }
}
