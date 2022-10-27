import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nom: string = 'DUPOND'
  prenom: string = 'CARMEL'
  age: number = 38
  sexe: string = 'masculin'

}
