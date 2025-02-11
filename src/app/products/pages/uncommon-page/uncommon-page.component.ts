import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: false,
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n Select
  public name : string = 'Polo Orellana';
  public gender : 'male' | 'female' = 'male';
  public invitationMap: { [key: string]: string } = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }
  public event : string[] = ['Person 1','Person 2','Person 3','Person 4','Person 5','Person 6','Person 7','Person 8','Person 9','Person 10',]
  public clientsMap : {[key : string]: string} = {
    '=0' : 'No tenemos clientes esperando',
    '=1' : 'Tenemos un cliente esperando',
    'other' : 'Tenemos # clientes esperando',
  }
  public person = {
    name : 'Juan',
    age: 45,
    address: 'Canada'
  }
  public myObservableTimer : Observable<number> = interval(2000)
                                                  .pipe(
                                                    tap(value => console.log(value))
                                                  );
  public promiseValue : Promise<string> = new Promise<string>((resolve , rejects) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      this.person.name = 'juan esta loco xd'
    }, 3500)
  })

  public changeClient() :void{
    this.name = 'Abigail';
    this.gender = 'female';
  }
  public deleteClient():void{
    this.event.pop();
  }
}
