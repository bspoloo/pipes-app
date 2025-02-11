import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public title = 'pipe-app';


  constructor(private primeNg : PrimeNG){}
  ngOnInit(): void {
    this.primeNg.ripple.set(true)
  }
}
