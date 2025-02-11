import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  standalone: false,
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {
  public nameLowerCase : string = 'fernanoo';
  public nameUppercase : string = 'COMO ES';
  public fullNmae : string = 'FeNAndO hERReRa';

  public customDate : Date = new Date();
}
